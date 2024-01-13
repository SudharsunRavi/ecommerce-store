import Header from "../Header"
import { data } from "../../utils/data"
import ProductCard from "./ProductCard"

const ProductPage = () => {
  const productData=data.products.products
  return (
    <div>
      <Header/>
      <div className="w-[13%] min-h-screen absolute ml-6 mt-36 shadow-2xl rounded-xl">
        <h1>Filter box</h1>
      </div>
      <ProductCard/>
    </div>
  )
}

export default ProductPage