import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useContext, useRef, useState } from "react"
import { useDispatch } from "react-redux";

import Validation from "../utils/validation";
import { addUser } from "../utils/redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const loginState=useContext();

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
        <form onSubmit={(e)=>e.preventDefault()}>
            {isSignIn && <input ref={name} type="text" placeholder="Name" />}
            <input ref={email} type="text" placeholder="Email" />
            <input ref={password} type="password" placeholder="Password" />
            <button onClick={handleValidation}>{isSignIn ? "Sign Up" : "Sign In"}</button>
        </form>

        <p className="py-3 cursor-pointer" onClick={handleSignIn}>{!isSignIn ? "New user? Sign up" : "Already a user? Sign in"}</p>

        {/* <loginState.Provider value={[isSignIn, setIsSignIn]}></loginState.Provider> */}
    </div>
  )
}

export default Login