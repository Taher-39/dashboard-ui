import React from 'react'
import metricsImg from '../Assets/Imgs/metrics.png'
import analyticsImg from '../Assets/Imgs/analytics.png'
import currencyExchangeImg from '../Assets/Imgs/currency-exchange-2.png'
import soundWaveImg from '../Assets/Imgs/sound-wave.png'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
    const Items = [
        {
            id: 1,
            itemName: "Dashboard",
            itemLink: "dashboard",
            itemImage: metricsImg
        },
        {
            id: 2,
            itemName: "Analytics",
            itemLink: "analytics",
            itemImage: analyticsImg
        },
        {
            id: 3,
            itemName: "Trading",
            itemLink: "trading",
            itemImage: currencyExchangeImg
        },
        {
            id: 4,
            itemName: "Notification",
            itemLink: "notification",
            itemImage: soundWaveImg
        },

    ]


  return (
    <div className='sidebar-main'>
        {
            Items.map(item => (
                <div key={item.id} className="text-center " style={{width: "110px"}}>
                    <Link to={`/${item.itemLink}`} className='my-4 mx-1' >
                        <img className='img-fluid' src={item.itemImage} alt="source/img" />
                        <p>{item.itemName}</p>
                    </Link>
                </div>
            ))
        }

        <div>
            <Link to="/">Logout</Link>
        </div>
    </div>
  )
}

export default DashboardSidebar