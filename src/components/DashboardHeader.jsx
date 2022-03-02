import React from 'react'
import {FaPlus} from 'react-icons/fa'

const DashboardHeader = () => {
  return (
    <div className='p-3'>
        <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">
                <h1>Dashboard</h1>
                <p className='text-secondary mt-2'>Welcome back, Andrew</p>
            </div>
            <div className="p-2 bd-highlight">
                <button className="btn btn-success"><FaPlus /> Add Unit</button>
            </div>
            <div className="p-2 bd-highlight">
                <img style={{width: "50px", borderRadius: "50%"}} className='img-fluid' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
                <span className='px-3'>Andrew Jonson</span>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader