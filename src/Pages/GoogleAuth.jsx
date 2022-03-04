import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const navigate = useNavigate()
    const [login, setLogin ] = useContext(UserContext)
    const signInHandler = () => {

      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLogin({name: user.displayName, email: user.email, img: user.photoURL});
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className='text-center mt-5'>
        
       { login.name ? <button className='btn btn-outline-danger' onClick={() => setLogin({})}>Log-Out</button> :
         <button className='btn btn-outline-success' onClick={signInHandler}>Google-SignIn</button> 
       }
    </div>
  )
}

export default GoogleAuth