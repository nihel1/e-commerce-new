import { ProductsCard } from "./ProductsCard"

export const Products = ({products})=>{
  console.log(products)  

  return <div className="py-10 cursor-pointer">
    <div className="flex flex-col items-center gap-4">
    <h1 className="text-2xl bg-black text-white py-2 w-80 text-center rounded-full">shopping everyday</h1>
      
      <p className="max-w-[700px] text-gray-600 text-center">
      Everything you need to sell online with the best website E-commerce.
      </p>
    </div>
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
      {products.map((item, key)=>{
        return <ProductsCard product={item} key={key}/>
      })}
    </div>
  </div>
}