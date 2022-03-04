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
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className='text-center mt-5'>
        <h3>Welcome {login?.name}</h3>
        <h3>{login?.email}</h3>
       { login.name ? <button className='btn btn-outline-danger' onClick={() => setLogin({})}>Log-Out</button> :
         <button className='btn btn-outline-success' onClick={signInHandler}>Google-SignIn</button> 
       }
       <div className="my-3">
           <Link className="btn btn-outline-primary" to="/">Home</Link>
       </div>
    </div>
  )
}

export default GoogleAuth