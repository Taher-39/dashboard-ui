import React, { useContext } from 'react'
import {FaPlus} from 'react-icons/fa'
import { UserContext } from '../App'

const DashboardHeader = () => {
    const [login, setLogin ] = useContext(UserContext)
  return (
    <div className='p-3'>
        <div className="container d-md-flex justify-content-between p-2 text-sm-center">
            <div>
                <h1 className='dash-text-color'>Dashboard</h1>
                <p className='text-secondary mt-2'>Welcome back, {login.name}</p>
            </div>
            <div className="d-md-flex d-sm-flex justify-content-between">
                <div className='py-2'>
                        <button className="btn header-btn"><FaPlus /> Add Unit</button>
                    </div>
                <div className='px-md-3'>
                        <img
                        className='img-fluid img-circle' 
                        src={login.img} alt="img" />
                        <span className='px-3  text-secondary'>{login.name}</span>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader