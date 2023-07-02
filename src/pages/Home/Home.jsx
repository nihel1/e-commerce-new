import { useEffect, useState } from "react"
import { Placard } from "../../components/Placard"
import { Products } from "../../components/Products"
import { useLoaderData } from "react-router-dom"

export const Home = () => {

  const [products, setProducts] = useState([])
  const data = useLoaderData()

  useEffect(()=>{
    setProducts(data.data)
  },[data])

  return (
    <div>
      <Placard/>
      <Products products={products}/>

    </div>
  )
}
