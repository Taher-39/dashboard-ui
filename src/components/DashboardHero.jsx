import { FaDollarSign, FaEuroSign, FaYenSign } from 'react-icons/fa'
import { BsCurrencyBitcoin } from 'react-icons/bs'

const DashboardHero = () => {
    const heros = [
        {
            id: 1,
            heading: "BALANCE",
            money: "$ 6500.00"
        },
        {
            id: 12,
            heading: "PROFITS",
            money: "$ 750.00"
        },
        {
            id: 3,
            heading: "LOSSES",
            money: "$ 350.00"
        },
        {
            id: 4,
            heading: "CURRENCIES",
        },
    ]
  return (
    <div className='row d-flex justify-content-between'>
        {
            heros.map(hero => (
                <div key={hero.id} className="col-md-3" style={{borderRight: "1px solid lightGray"}}>
                   <div className="text-center">
                   <h6 className='text-secondary'>{hero.heading}</h6>
                    {hero.money ? <h3 className='dash-text-color'>{hero.money}</h3> : (
                        <div>
                            <span className='btn mx-2' style={{backgroundColor: "lightBlue", borderRadius: "50%"}}><FaDollarSign style={{color: '#2464FC'}} /></span>
                            <span className='btn mx-2'style={{backgroundColor: "lightBlue", borderRadius: "50%"}}><FaEuroSign style={{color: '#2464FC'}} /></span>
                            <span className='btn mx-2'style={{backgroundColor: "lightBlue", borderRadius: "50%"}}><FaYenSign style={{color: '#2464FC'}} /></span>
                            <span className='btn mx-2'style={{backgroundColor: "lightBlue", borderRadius: "50%"}}><BsCurrencyBitcoin style={{color: '#2464FC'}} /></span>
                        </div>
                    )}
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default DashboardHero