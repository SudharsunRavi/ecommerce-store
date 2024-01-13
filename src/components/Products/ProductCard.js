import { Link } from "react-router-dom"
import { data } from "../../utils/data"

const ProductCard = () => {
    const productData=data?.products?.products
    console.log(productData[0])

  return (
    <div className="pt-36 pl-[285px]">
      <h1 className="font-bold text-5xl mb-12">Shoe collections</h1>
      {productData.map((product) => (
        <div key={product.cloudProductId}>
            {product.colorways.map((colorway) => (
              <Link to={"/products/"+colorway.pid}>
                <div className="pr-32 pb-10 flex flex-col float-start">
                  <img src={colorway.images.portraitURL} alt={colorway.colorDescription} className="w-[300px] hover:brightness-50 transition duration-300" />
                  <p className="font-semibold text-xl mt-2">{product?.title}</p>
                  <p className="font-semibold text-md">MRP: ₹ {colorway?.price?.discounted ? colorway?.price?.currentPrice : colorway?.price?.fullPrice}</p>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  )
}

export default ProductCard