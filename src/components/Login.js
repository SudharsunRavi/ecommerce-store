import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { createContext, useContext, useRef, useState } from "react"
import { useDispatch } from "react-redux";

import Validation from "../utils/validation";
import { addUser } from "../utils/redux/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const name = useRef();
    const email = useRef();
    const password = useRef();

    const [isSignIn, setIsSignIn] = useState(false);
    const [error, setError] = useState("");



    const handleSignIn=()=>setIsSignIn(!isSignIn);

    const handleValidation = () => {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;

        const validation=Validation(emailValue, passwordValue);
        setError(validation);

        if(validation===null){
            if(isSignIn){
                //SIGN UP NEW USER
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                    updateProfile(user, {
                    displayName: name.current.value,
                }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                    navigate("/products")
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode+errorMessage)
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + errorMessage);
            });
            }
            

            else{
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => { 
                    const user = userCredential.user;
                    navigate("/products")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode+errorMessage);
                });
            }
        }
    }

  return (
    <div>
        <Header/>
        <img src={LOGIN_BG} alt="bg" className="absolute object-cover w-full h-full"/>
        <div className="absolute w-3/12 h-[450px] m-auto pt-[90px] pl-[40px] my-44 right-0 left-0 bg-black bg-opacity-85 rounded-lg">
            <form onSubmit={(e)=>e.preventDefault()}>
                {isSignIn && <><input ref={name} type="text" placeholder="Name" className="mx-6 mb-6 p-2 w-72 border rounded-lg" /> <br/></>}
                <input ref={email} type="text" placeholder="Email" className="mx-6 mb-6 p-2 w-72 border rounded-lg" /> <br/>
                <input ref={password} type="password" placeholder="Password" className="mx-6 mb-6 p-2 w-72 border rounded-lg" /> <br/><br/>
                <button onClick={handleValidation} className="mx-6 mb-3 p-2 bg-gray-800 text-white rounded-xl hover:bg-white hover:text-black hover:border-black hover:border-[3px]">{isSignIn ? "Sign Up" : "Sign In"}</button>
            </form>
            <div className="px-[25px]">
                <p className="text-red-500">{error}</p>
                <p className="cursor-pointer text-white hover:underline" onClick={handleSignIn}>{!isSignIn ? "New user? Sign up" : "Already a user? Sign in"}</p>
            </div>
                
        </div>    
    </div>
  )
}

export default Login
