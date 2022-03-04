import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import GoogleAuth from './GoogleAuth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { UserContext } from '../App';

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  
  const [login, setLogin ] = useContext(UserContext)
  const handleSubmit = async(e) => {

    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

        updateProfile(auth.currentUser,{
        displayName: name
        })

        if(user) {
          navigate("/dashboard")
        }

        setName('')
        setEmail('')
        setPassword('')

      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Something Went wrong with registration.")

      });
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div style={{width: '600px'}} className='p-4 mt-5 shadow rounded'>
          {
            login.name ? 
          <div className="text-center">
              <button className='btn btn-outline-danger' onClick={() => setLogin({})}>Log-Out</button>
          </div> : 
          <>
            <form onSubmit={handleSubmit}>
            <input 
              className='form-control my-3'
              type="name" 
              id="name" 
              placeholder='John Deo' 
              required 
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              className='form-control my-3'
              type="email" 
              id="email" 
              placeholder='test@example.com' 
              required 
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className='form-control'
              type='password'
              id="password" 
              placeholder='Password' 
              required 
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-sm-flex justify-content-between my-3">
              <button className='btn btn-outline-success w-50  ' type="submit">Sign-Up</button>
              <Link className='mt-2' to="/sign-in">Sign In Instead</Link>
            </div>
          </form>
          <div className="text-center">
            <GoogleAuth />
          </div>
        </> 
        }
        <div className="text-center my-3">
          <Link to="/">Home</Link>
        </div>
        </div>
      </div>
  </>
  )
}

export default SignUp