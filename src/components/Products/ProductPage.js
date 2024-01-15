import Header from "../Header"
import { data } from "../../utils/data"
import ProductCard from "./ProductContainer"

const ProductPage = () => {
  const productData=data.products.products
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductPage