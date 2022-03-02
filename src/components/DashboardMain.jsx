import React from 'react'

const DashboardMain = () => {
    const mainItems = [
        {
            id: 1,
            country: "Bangladesh",
            rate: "475"
        },
        {
            id: 2,
            country: "Nepal",
            rate: "431"
        },
        {
            id: 1,
            country: "North Korea",
            rate: "171"
        },
        {
            id: 1,
            country: "Spain",
            rate: "485"
        },
        {
            id: 1,
            country: "India",
            rate: "475"
        },
        {
            id: 1,
            country: "South Africa",
            rate: "475"
        },
    ]
  return (
    <div className='shadow my-5 p-4'>
        <div className="row">
            {
                mainItems.map(item => (
                    <div className="col-md-2 text-center" key={item.id}>
                        <p className='text-secondary'>{item.country}</p>
                        <h2>{item.rate}</h2>
                        <p>-------</p>
                    </div>
                ))
            }
        </div>        
    </div>
  )
}

export default DashboardMain