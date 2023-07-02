import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from "../../components/CartItem";
import { toast } from 'react-toastify';

export const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);
  const [totalAmount, setTotalAmount] = useState("");
  const UserInfo = useSelector((state) => state.shop.userInfo);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price);
  }, [productData]);

  const handleCheckout = () => {
    if (UserInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout");
    }
  };

  return (
    <div>
      <img className='img-3 w-full h-70 object-cover' src={"/img/sales.JPG"} alt="cartImg" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='bg-[#fafafa] py-6 px-4 div-3'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 div-4'>
            <h2 className='text-2xl font-medium h2-1'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base p-1'>
              Subtotal
              <span className='font-bold text-lg span-1'>{totalAmount}</span>
            </p>
            <p className='flex items-start gap-4 text-base p-2'>
              Shipping
              <span>
              Hello, it's really a pain to be followed. Which, of truth
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6 p-3'>
            Total
            <span className='text-xl font-bold span-2'>${totalAmount}</span>
          </p>
          <button onClick={handleCheckout} className='text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 button-1'>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};
