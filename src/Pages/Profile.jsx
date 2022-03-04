import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Profile = () => {
  const [login, setLogin ] = useContext(UserContext)

  return (
    <div className='text-center text-secondary my-3'>
        <h3>Profile</h3>
        {
          login.name ? (
            <>
            <h3>{login?.email}</h3> 
            <h3>{login?.name}</h3> 
            <Link className='my-2 btn btn-outline-primary' to="/">Home</Link>
            </>
          ) : (
              <Link className='btn btn-outline-success' to="/sign-in">Sign-in</Link>
          )
        }
    </div>
    
  )
}

export default Profile