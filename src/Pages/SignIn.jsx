import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const SignIn = () => {
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
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      console.log(user.displayName, user)
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <>
      <h2 className='text-secondary my-3 text-center'>Welcome Again</h2>
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
            <button className='btn btn-outline-info w-50  my-3' type="submit">Google Sign-In</button>
          </div>
          <div className="text-center">
            <Link className='btn btn-outline-danger w-50  my-3' to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn