import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addToCart } from '../redux/fashion';
import { ToastContainer, toast } from 'react-toastify';

export const ProductsCard = ({product}) => {

  const dispatch =useDispatch()

  const {title, oldPrice, price, image, category, isNew, description} =product;
  const navigate = useNavigate()

  const _id = title;

  const idString = (Title)=>{
    const newIdString = String(Title).toLowerCase().split(" ").join("");
    return newIdString;
  } 
  const rootId = idString(_id)
  // console.log(rootId)

  const handleDetails = ()=>{
    navigate(`/product/${rootId}`,{
      state: {
        item: product
      }
    })
  }


  return (
    <div  className='group relative'>
      <div  className="w-full h-96 cursor-pointer overflow-hidden">
        <img onClick={handleDetails} className='img-6 h-full w-full object-cover group-hover:scale-110 duration-500'
         src={image} alt="" />
      </div>
      <div className="border w-full border-[1px] px-2 py-4 ">
          <div>
            <h2 className='font-arial text-xl font-bold '>{title}</h2>
          </div>
          <div className='flex justify-between items-center'>
          <p>{category}</p>
          <div className='flex gap-2 justify-end'>
            <p className='price line-through text-gray-500'>${price}</p>
            <p className='font-semibold'>${oldPrice}</p>
          </div>

        </div>
        <div className='flex justify-between mt-2'>
          <button onClick={()=>dispatch(addToCart({
            _id: product._id, 
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
            description: product.description
          })) && toast.success(`${product.title} is added`)} className='add-cart text-blue-600'>
            add To Cart
          </button>
        </div>
        <div className='btn-add top-2 right-2 absolute'>
          {isNew && <p className='text-white font-semibold px-6 py-1'></p>}
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}


