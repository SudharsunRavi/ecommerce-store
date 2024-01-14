import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../utils/redux/cartSlice'
import { EMPTY_CART_IMG } from '../utils/constants'

  const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.cartItems)
    console.log(cartItems)

    const dispatch=useDispatch()

    const handleIncreaseItem=(item)=>{
      dispatch(increaseItem(item))
    }

    const handleDecreaseItem=(item)=>{
      dispatch(decreaseItem(item))
    }

    const handleRemoveItem=(item)=>{
      dispatch(removeItem(item))
    }

    return (
      <div>
        <Header/>
        <div className='pt-36'>
          <h1 className='absolute left-[50%] font-bold text-5xl'>Cart</h1>
          <div className='pl-[300px] mt-24'>

            {cartItems.length===0 && 
              <div className='absolute left-[41%]'>
                <img src={EMPTY_CART_IMG} alt="empty-cart" className='w-[40%]'/>
                <h1 className='text-2xl ml-14'>Looks like your cart is empty!</h1>
              </div>
            }

            {cartItems.map((item)=>(
              <div key={item.pid}>
                <div className='flex border mt-4 w-[75%]'>
                  <img src={item.images.squarishURL} alt={item.colorDescription} className="w-[180px]" />

                  <div className='mt-16 ml-4'>
                    <p className="font-semibold text-xl mt-2">{item.colorDescription}</p>
                    <p className="text-gray-500 text-sm">{item.size}</p>
                    <p className="font-semibold text-md">₹ {item.price.discounted ? item.price.currentPrice : item.price.fullPrice}</p>
                  </div>

                  <div className='ml-[400px] mt-16 grid grid-cols-2'>
                    <div className=" flex outline outline-2 items-center space-x-5 rounded-md p-2 mr-4 h-14">
                      <button className=" bg-black  text-white text-xl rounded-md p-2 w-8" onClick={()=>handleIncreaseItem(item)}> + </button>
                      <p className="text-base text-black flex">{item.length}</p>
                      <button className=" bg-black  text-white text-xl rounded-md p-2 w-8" onClick={()=>handleDecreaseItem(item)}> - </button>
                    </div>
                    <button className="bg-black rounded-md text-white w-12 h-12 py-3 mt-1 mr-2 " onClick={()=>handleRemoveItem(item)}>X</button>
                  </div>
                </div>  
              </div>
            ))}

            {cartItems.length!==0 && <div>
              <div className="mt-16 ml-4 mr-96 flex justify-between">
                <div>
                  <p className="font-semibold text-2xl mt-2">Subtotal</p>
                  <p className="text-gray-500 text-sm">incl. of taxes</p>
                  <p className="text-gray-500 text-sm">(Also includes all applicable duties)</p>
                  <p className="font-semibold text-2xl mt-2">Shipping</p>
                  <p className="font-bold text-3xl mt-3 py-1">Total</p>
                </div>
                <div>
                  <p className="font-bold text-xl mt-2">₹ {cartItems.reduce((total,item)=>total+item.price.currentPrice*item.length,0)}</p><br/><br/>
                  <p className="font-semibold text-xl mt-2">FREE</p>
                  <p className="font-bold text-xl mt-3 border-t-2 py-2">₹ {cartItems.reduce((total,item)=>total+item.price.currentPrice*item.length,0)}</p><br/><br/>
                </div>
              </div>
            </div>}

          </div>
        </div>
      </div>
    )
  }

  export default Cart