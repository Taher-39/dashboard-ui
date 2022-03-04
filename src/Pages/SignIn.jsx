import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.config";
import GoogleAuth from './GoogleAuth';
import { UserContext } from '../App';

const SignIn = () => {
  const [login, setLogin ] = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const submitHandler = async(e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      setLogin({name: user.displayName, email: user.email, img: user.photoURL});
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <>
      <div className="text-center my-3">
      {
        login.name && <Link className='btn btn-outline-success' to="/profile">Profile</Link>
      }
      </div>
      <div className="container d-flex justify-content-center">
        <div style={{ width: '600px' }} className='p-4 mt-5 shadow rounded'>
          <form onSubmit={submitHandler}>
            <input
              className='form-control my-3'
              type="email"
              id="email"
              placeholder='test@example.com'
              required
              value={email || ""}
              onChange={onChange}
            />
            <input
              className='form-control'
              type='password'
              id="password"
              placeholder='Password'
              required
              value={password || ""}
              onChange={onChange}
            />
            <div className="text-center">
              <button className='btn btn-outline-success w-50  my-3' type="submit">Sign-In</button>
            </div>
          </form >

          <div className="text-center">
            <Link className='btn btn-outline-success' to="/sign-up">Sign Up Instead</Link>
          </div>

          <div className="text-center">
            <GoogleAuth />
          </div>
          <div className="text-center">
            <Link className='btn btn-outline-primary w-50  my-3' to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn