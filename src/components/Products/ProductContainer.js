import { Link } from "react-router-dom"
import { data } from "../../utils/data"
import { useState } from "react"

const ProductCard = () => {
    const productData1=data?.products?.products
    //console.log(productData[0])
    const [productData, setProductData]=useState(productData1)

    const handlePriceLowToHigh = () => {
      const sortedProductData = productData.sort((a, b) => {
        return a?.colorways[0]?.price?.currentPrice - b?.colorways[0]?.price?.currentPrice
      })
      setProductData([...sortedProductData])
    }

    const handlePriceHighToLow = () => {
      const sortedProductData = productData.sort((a, b) => {
        return b?.colorways[0]?.price?.currentPrice - a?.colorways[0]?.price?.currentPrice
      })
      setProductData([...sortedProductData])
    }

    const handleSearch = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.trim()) {
        setProductData([...productData1]);
      } else {
        const filteredProductData = productData1.filter((product) => {
          return product.title.toLowerCase().includes(searchValue.toLowerCase());
        });
    
        setProductData([...filteredProductData]);
      }
    };
    

  return (
    <div className="pt-36 pl-[285px]">
      <div className="flex justify-between mr-[230px]">
        <h1 className="font-bold text-5xl mb-12">Shoe collections</h1>
        <select className="font-semibold text-xl -mt-7" onChange={(e) => {
          const selectedOption = e.target.value;
          if (selectedOption === 'lowToHigh') {
            handlePriceLowToHigh();
          } else if (selectedOption === 'highToLow') {
            handlePriceHighToLow();
          }
        }}>
          <option className="font-semibold text-xl mt-4" value="">Sort by:</option>
          <option className="font-semibold text-xl mt-4" value="highToLow">Price-High to low</option>
          <option className="font-semibold text-xl mt-4" value="lowToHigh">Price-Low to high</option>
        </select>
      </div>

      <div>
        <input type="search" placeholder="Search" className="w-[300px] h-[50px] border-2 border-gray-300 rounded-2xl pl-4 mb-12" onChange={handleSearch} />
      </div>

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