import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container text-center mt-5">
     <h3>Welcome Our Site</h3>
     <div className="my-5 list-style-none">

        <div className="my-3"><Link to="/dashboard">Dashboard</Link></div>
        <div className="my-3"><Link to="/sign-in">Sign-in</Link></div>
        <div className="my-3"><Link to="/profile">Profile</Link></div>
        
     </div>
    </div>
  )
}

export default Home