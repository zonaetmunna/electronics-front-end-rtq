const ConversationsList = ({ conversations, onSelectConversation }) => {
	return (
		<div className="bg-white p-4 shadow">
			<h2 className="text-lg font-semibold mb-2">Conversations</h2>
			<ul>
				{conversations?.map((conversation) => (
					// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
					<li
						// eslint-disable-next-line no-underscore-dangle
						key={conversation._id}
						className="cursor-pointer p-2 hover:bg-gray-100"
						// eslint-disable-next-line no-underscore-dangle
						onClick={() => onSelectConversation(conversation._id)}
					>
						{conversation.username} {/* Display the name or username */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ConversationsList;
