import { useNavigate, useParams } from 'react-router-dom';

import merchant from '../../../assets/images/download.png';
import Button from '../../../components/atoms/Button';
import MerchantRegistrationPage from './MerchantRegistrationPage';

const AccountCreatorPage = () => {
	const navigate = useNavigate();
	const { type } = useParams();

	if (type === 'merchant') {
		return <MerchantRegistrationPage />;
	}

	/* if (type === "admin") {
    return <AdminRegistration />;
  } */
	return (
		<div className="h-screen pt-14">
			<h1 className="text-center my-10 text-2xl">Continue as ...</h1>
			<div className="flex justify-evenly ">
				<Button
					onClick={() => navigate('/register/merchant')}
					className="flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group"
				>
					<img className="h-5/6" src={merchant} alt="" />
					<p className="text-center text-3xl">merchant</p>
				</Button>
				{/* <div
          onClick={() => navigate("/register/admin")}
          className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
        >
          <img className='h-[77%]' src={admin} alt='' />
          <p className='text-center text-3xl'>admin</p>
        </div> */}
			</div>
		</div>
	);
};

export default AccountCreatorPage;
