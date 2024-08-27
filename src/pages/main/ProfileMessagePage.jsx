import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

import Button from '../../components/atoms/Button';
/* // Message sidebar
const MessagingSidebar = () => {
  const { data: admins } = useGetAdminQuery();

  return (
    <div className="bg-gray-200 p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">Admin</h2>
      <ul className="space-y-2">
        {admins?.map((admin) => (
          <li
            key={admin._id}
            className="hover:bg-gray-300 cursor-pointer p-2 rounded-md"
          >
            {admin.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}; */

const ProfileMessagePage = () => {
	/* const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user:detail"))
  ); */
	const { user } = useSelector((state) => state.auth);
	const [conversations, setConversations] = useState([]);
	const [messages, setMessages] = useState({});
	const [message, setMessage] = useState('');
	const [users, setUsers] = useState([]);
	const [socket, setSocket] = useState(null);
	const messageRef = useRef(null);

	useEffect(() => {
		setSocket(io('http://localhost:8080'));
	}, []);

	useEffect(() => {
		socket?.emit('addUser', user?.id);
		// eslint-disable-next-line no-unused-vars
		socket?.on('getUsers', (users) => {});
		socket?.on('getMessage', (data) => {
			setMessages((prev) => ({
				...prev,
				messages: [...prev.messages, { user: data.user, message: data.message }],
			}));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages?.messages]);

	useEffect(() => {
		const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
		const fetchConversations = async () => {
			const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const resData = await res.json();
			setConversations(resData);
		};
		fetchConversations();
	}, []);

	// get all users
	useEffect(() => {
		const fetchUsers = async () => {
			// eslint-disable-next-line no-underscore-dangle
			const res = await fetch(`http://localhost:8000/api/users/${user?._id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const resData = await res.json();
			setUsers(resData);
		};
		fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchMessages = async (conversationId, receiver) => {
		const res = await fetch(
			`http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const resData = await res.json();
		setMessages({ messages: resData, receiver, conversationId });
	};

	// eslint-disable-next-line no-unused-vars
	const sendMessage = async (e) => {
		setMessage('');
		socket?.emit('sendMessage', {
			senderId: user?.id,
			receiverId: messages?.receiver?.receiverId,
			message,
			conversationId: messages?.conversationId,
		});
		// eslint-disable-next-line no-unused-vars
		const res = await fetch(`http://localhost:8000/api/message`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				conversationId: messages?.conversationId,
				senderId: user?.id,
				message,
				receiverId: messages?.receiver?.receiverId,
			}),
		});
	};

	return (
		<div className=" flex">
			<div className="w-[25%] h-screen bg-secondary overflow-scroll">
				<div className="flex items-center my-8 mx-14">
					<div>
						{/*  <img
              src={tutorialsdev}
              width={75}
              height={75}
              className="border border-primary p-[2px] rounded-full"
              alt="logo"
            /> */}
					</div>
					<div className="ml-8">
						<h3 className="text-2xl">{user?.fullName}</h3>
						<p className="text-lg font-light">My Account</p>
					</div>
				</div>
				<hr />
				<div className="mx-14 mt-10">
					<div className="text-primary text-lg">Messages</div>
					<div>
						{conversations.length > 0 ? (
							conversations.map(({ conversationId, user }) => {
								return (
									<div className="flex items-center py-8 border-b border-b-gray-300">
										<Button
											className="cursor-pointer flex items-center"
											onClick={() => fetchMessages(conversationId, user)}
										>
											<div>
												<img
													src={user.image}
													alt="logo"
													className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary"
												/>
											</div>
											<div className="ml-6">
												<h3 className="text-lg font-semibold">{user?.firstName}</h3>
												<p className="text-sm font-light text-gray-600">{user?.email}</p>
											</div>
										</Button>
									</div>
								);
							})
						) : (
							<div className="text-center text-lg font-semibold mt-24">No Conversations</div>
						)}
					</div>
				</div>
			</div>
			<div className="w-[50%] h-screen bg-white flex flex-col items-center">
				{messages?.receiver?.fullName && (
					<div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2">
						<div className="cursor-pointer">
							<img src={user.image} width={60} height={60} className="rounded-full" alt="logo" />
						</div>
						<div className="ml-6 mr-auto">
							<h3 className="text-lg">{messages?.receiver?.firstName}</h3>
							<p className="text-sm font-light text-gray-600">{messages?.receiver?.email}</p>
						</div>
						<div className="cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-phone-outgoing"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="black"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
								<line x1="15" y1="9" x2="20" y2="4" />
								<polyline points="16 4 20 4 20 8" />
							</svg>
						</div>
					</div>
				)}
				<div className="h-[75%] w-full overflow-scroll shadow-sm">
					<div className="p-14">
						{messages?.messages?.length > 0 ? (
							messages.messages.map(({ message, user: { _id } = {} }) => {
								return (
									<>
										<div
											className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
												// eslint-disable-next-line no-underscore-dangle
												_id === user?._id
													? 'bg-primary text-white rounded-tl-xl ml-auto'
													: 'bg-secondary rounded-tr-xl'
											} `}
										>
											{message}
										</div>
										<div ref={messageRef} />
									</>
								);
							})
						) : (
							<div className="text-center text-lg font-semibold mt-24">
								No Messages or No Conversation Selected
							</div>
						)}
					</div>
				</div>
				{messages?.receiver?.fullName && (
					<div className="p-14 w-full flex items-center">
						<input
							placeholder="Type a message..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-[75%]"
							// eslint-disable-next-line react/no-unknown-property
							inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
						/>
						<Button
							className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
								!message && 'pointer-events-none'
							}`}
							onClick={() => sendMessage()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-send"
								width="30"
								height="30"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#2c3e50"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="10" y1="14" x2="21" y2="3" />
								<path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
							</svg>
						</Button>
						<div
							className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
								!message && 'pointer-events-none'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-circle-plus"
								width="30"
								height="30"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#2c3e50"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<line x1="9" y1="12" x2="15" y2="12" />
								<line x1="12" y1="9" x2="12" y2="15" />
							</svg>
						</div>
					</div>
				)}
			</div>
			<div className="w-[25%] h-screen bg-light px-8 py-16 overflow-scroll">
				<div className="text-primary text-lg">People</div>
				<div>
					{users.length > 0 ? (
						// eslint-disable-next-line no-unused-vars
						users.map(({ userId, user }) => {
							return (
								<div className="flex items-center py-8 border-b border-b-gray-300">
									<Button
										className="cursor-pointer flex items-center"
										onClick={() => fetchMessages('new', user)}
									>
										<div>
											<img
												src={user.image}
												className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary"
												alt="profile"
											/>
										</div>
										<div className="ml-6">
											<h3 className="text-lg font-semibold">{user?.firstName}</h3>
											<p className="text-sm font-light text-gray-600">{user?.email}</p>
										</div>
									</Button>
								</div>
							);
						})
					) : (
						<div className="text-center text-lg font-semibold mt-24">No Conversations</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileMessagePage;
