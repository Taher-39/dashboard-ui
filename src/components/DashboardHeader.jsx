import React from 'react'
import {FaPlus} from 'react-icons/fa'

const DashboardHeader = () => {

  return (
    <div className='p-3'>
        <div className="container d-md-flex justify-content-between p-2 text-sm-center">
            <div>
                <h1 className='dash-text-color'>Dashboard</h1>
                <p className='text-secondary mt-2'>Welcome back, Andrew</p>
            </div>
            <div className="d-md-flex d-sm-flex justify-content-between">
                <div className='py-2'>
                        <button className="btn btn-success"><FaPlus /> Add Unit</button>
                    </div>
                <div className='px-md-3'>
                        <img
                        className='img-fluid img-circle' 
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
                        <span className='px-3  text-secondary'>Andrew Jonson</span>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader