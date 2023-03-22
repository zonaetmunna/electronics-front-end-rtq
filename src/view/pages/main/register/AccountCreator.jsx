import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import AdminRegistration from './AdminRegistration';
import MerchantRegistration from './MerchantRegistration';
import merchant from "../../../../assets/images/download.png";
import admin from "../../../../assets/images/admin.gif";


const AccountCreator = () => {
    const navigate = useNavigate();
  const { type } = useParams();

  if (type === "merchant") {
    return <MerchantRegistration />;
  }

  /* if (type === "admin") {
    return <AdminRegistration />;
  } */
    return (
        <div className='h-screen pt-14'>
      <h1 className='text-center my-10 text-2xl'>Continue as ...</h1>
      <div className='flex justify-evenly '>
        <div
          onClick={() => navigate("/register/merchant")}
          className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
        >
          <img className='h-5/6' src={merchant} alt='' />
          <p className='text-center text-3xl'>merchant</p>
        </div>
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

export default AccountCreator;