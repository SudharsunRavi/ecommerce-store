import Header from "../Header"
import { data } from "../../utils/data"
import ProductCard from "./ProductContainer"

const ProductPage = () => {
  const productData=data.products.products
  return (
    <div>
      <Header/>
      {/* <div className="w-[13%] min-h-screen absolute ml-6 mt-40 shadow-2xl rounded-xl">
        <h1 className="text-2xl ml-2 mt-3 font-semibold">Sort by:</h1>
        <ul className="ml-4">
          <h1 className="font-semibold text-xl mt-2">Price</h1>
          <li className="cursor-pointer ml-4">Low to High</li>
          <li className="cursor-pointer ml-4">High to Low</li>
        </ul>
      </div> */}
      <ProductCard/>
    </div>
  )
}

export default ProductPage