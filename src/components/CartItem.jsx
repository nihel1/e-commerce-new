import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { decrementQantity, deleteFromCart, incrementQuantity, resetCart } from "../redux/fashion";


export const CartItem = () => {
  const dispatch = useDispatch()

  const productData = useSelector((state)=> state.shop.productData)
  console.log(productData)

  return (
    <div className="w-2/3 pr-10 cart-item">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl cart-title">Shopping cart</h2>
      </div>
      <div>
        {
          productData.map((item, key)=>{
            return <div key={item._id} className="flex items-center justify-between gap-6 mt-6 cart-item-row">
              <div className="flex items-center gap-2">
                <CloseIcon onClick={()=> dispatch(deleteFromCart(item._id))} className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 close-icon" />
                <img src={item.image} className="img-buy w-32 h-32 object-cover item-image" alt="" />
              </div>
              <h2 className="w-52 item-name">{item.title}</h2>
              <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 item-quantity'>
                <p className='text-base text-black'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <button onClick={()=> dispatch(decrementQantity({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    description: item.description
                  }))} className='btn-minus'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=> dispatch(incrementQuantity({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    description: item.description
                  }))} className='btn-plus'>+</button>
                </div>
              </div>
              <p className="w-10 item-total-price">${item.price * item.quantity}</p>
            </div>
          })
        }
        <button onClick={()=> dispatch(resetCart())} className='text-xl font-bold bg-red-500 text-white py-1 ml-6 px-6 mt-8 reset-button'>Reset Cart</button>
      </div>
    </div>
  )
}
