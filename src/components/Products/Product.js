import { useParams } from "react-router-dom"
import { data } from "../../utils/data"
import { useEffect, useState } from "react";
import Header from "../Header";
import { addItem, increaseItem } from "../../utils/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
    const { pid } = useParams();
    const cartItems=useSelector((store)=>store.cart.cartItems)

    const [product, setProduct]=useState(null);
    const [colorway, setColorway] = useState(null);

    const dispatch=useDispatch()

    useEffect(() => {
    const fetchColorwayData = async () => {
      const productData = data?.products?.products;

      const selectedProduct = productData.find((p) =>
        p.colorways.some((c) => c.pid === pid)
      );
      setProduct(selectedProduct);
      //console.log(selectedProduct)

      const selectedColorway = selectedProduct?.colorways.find(
        (c) => c.pid === pid
      );
      //console.log(selectedColorway)
      setColorway(selectedColorway);
    };

    fetchColorwayData();
  }, [pid]);

  const handleAddToCart = (colorway) => {
    const existingItem = cartItems.find(item => item.pid === colorway.pid);
    if (existingItem) {
      dispatch(increaseItem(colorway));
    } else {
      dispatch(addItem(colorway));
    }
  };

  return (
    <div>
        <Header/>
        <div className="pt-40 flex justify-center">
            <img src={colorway?.images?.portraitURL} alt="product" className="rounded-2xl w-[450px]" />
            <div className="pl-10">
                <h1 className="font-bold text-5xl">{product?.title}</h1>
                <h1 className="font-semibold text-2xl my-1">{product?.subtitle}</h1>
                <h1 className="font-semibold text-2xl mt-8">MRP: ₹ {colorway?.price?.discounted ? colorway?.price?.currentPrice : colorway?.price?.fullPrice}</h1>
                <p className="text-gray-500">incl. of taxes</p>
                <p className="text-gray-500">(Also includes all applicable duties)</p>
                <h1 className="text-lg my-6"><span className="font-semibold">Color shown: </span>{colorway?.colorDescription}</h1>
                <div>
                    <button className="bg-black rounded-3xl text-white w-48 py-3 mt-8" onClick={()=>handleAddToCart(colorway)}>Add to Bag</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product