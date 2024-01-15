import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useEffect } from "react";
import { LOGO, LOGO_WHITE } from "../utils/constants";
//import useTheme from "../utils/custom hooks/useTheme";

const Header = () => {
  const dispatch=useDispatch()

  //const [dark, toggleTheme]=useTheme();

  const user=useSelector((state)=>state.user)
  const isSignIn = useSelector((state) => state.user.isSignIn);

  const cartValue=useSelector((state)=>state.cart.cartItems.length)

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: email.split('@')[0] }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute px-8 py-2 w-screen z-10">
      <div className="flex justify-between text-neutral-900">
        <div>
            {/* {dark ? <img src={LOGO_WHITE} alt="logo-white" className="h-[55px] w-[90px] mt-5 ml-5" /> : <img src={LOGO} alt="logo" className="h-[100px] w-[90px] ml-5" />} */}
            <img src={LOGO} alt="logo" className="h-[100px] w-[90px] ml-5" />
        </div>

        <div>
          <ul className="flex flex-row mx-7 my-10">
            {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
            <Link to="/">
              <li className="px-3 hover:text-black hover:text-xl hover:underline text-lg">Home</li>
            </Link>

            <Link to={isSignIn ? "/products" : "/login"}>
              <li className="px-3 hover:text-black hover:text-xl hover:underline text-lg">Products</li>
            </Link>

            <Link to="/contact">
              <li className="px-3 hover:text-black hover:text-xl hover:underline text-lg">Contact us</li>
            </Link>
            
            <Link to={isSignIn ? "/cart" : "/login"}>
              <li className="px-3 hover:text-black hover:text-xl hover:underline text-lg"><i className="fa fa-cart-plus text-xl pr-2 hover:text-black hover:text-xl hover:underline" /><span className="-mt-2 text-lg hover:text-black hover:text-xl hover:underline">({cartValue})</span></li>
            </Link>

            {!isSignIn && <Link to="/login">
              <li className="px-3 hover:text-black hover:text-xl hover:underline text-lg">Login</li>
            </Link>}
            
              {isSignIn && <button className="bg-black text-white px-2 py-2 -mt-1 ml-2 rounded-xl hover:bg-neutral-100 hover:text-black hover:border-black" onClick={handleSignOut}>Sign Out</button>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header