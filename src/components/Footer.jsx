import React from 'react';
import {shop} from "../logo/Logo";



export const Footer = () => {
  return (
    <div className='footer'>
      <div className=' flex flex-col gap-7'>
        <div className='flex flex-col gap-7'>
          <img className='img-5 h-10 w-20' src={shop} alt="" />
          <p className=' text-white text-sm tracking-wide'>store.com</p>
          <img src={'/img/payement.jpg'} className='payement-cart w-90 rounded-full' alt="" />
        </div>
        <div className='flex flex-row gap-3'>
          
        
          
    
  
        </div>
      </div>
      <div className="">
        <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
        <p>7, Avenue Mohamed Melki 1005 El Omrane</p>
        <p>Mobile: 59648213</p>
        <p>Phone: 74698763</p>
        <p>Email: e-commerce.shop@gmail.com</p>
      </div>
      <div>
        <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
        <p>My Account</p>
        <p>Checkout</p>
        <p>Order tracking</p>
        <p>help & support</p>

      </div>
    </div>
  )
}
