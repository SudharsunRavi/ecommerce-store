import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { addUser, removeUser } from "../utils/redux/userSlice";

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((appStore)=>appStore.user)

  // const [isSignIn] = useContext()

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
        navigate("/error")
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate('/products');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex justify-between">
        <div>
            <h1>Nike</h1>
        </div>

        <div>
            <ul className="flex flex-row">
                <li className="px-3">Home</li>
                <li className="px-3">Products</li>
                <li className="px-3">Cart</li>
                <li className="px-3">Login</li>
                <button onClick={handleSignOut}>Sign Out</button>
            </ul>
        </div>
    </div>
  )
}

export default Header