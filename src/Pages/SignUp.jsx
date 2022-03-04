import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import GoogleAuth from './GoogleAuth';
import { auth } from '../firebase.config';

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  
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
        console.log(errorMessage)

      });
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div style={{width: '600px'}} className='p-4 mt-5 shadow rounded'>
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
            <div className="text-center">
              <button className='btn btn-outline-success w-50  my-3' type="submit">Sign-Up</button>
            </div>
          </form>

          <div className="text-center">
            <Link className='btn btn-outline-success' to="/sign-in">Sign In Instead</Link>
          </div>

          <div className="text-center">
            <GoogleAuth />
          </div>
          
          <div className="text-center">
            <Link className='btn btn-outline-danger w-50  my-3' to="/">Home</Link>
          </div>
        </div>
      </div>
  </>
  )
}

export default SignUp