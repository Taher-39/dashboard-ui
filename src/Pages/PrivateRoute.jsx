import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../App'

const PrivateRoute = () => {
  const [login, setLogin] = useContext(UserContext)
  return login.name ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute