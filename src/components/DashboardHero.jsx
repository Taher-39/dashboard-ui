import { FaDollarSign, FaEuroSign, FaYenSign, FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { HeroData } from '../Data/HeroData'

const DashboardHero = () => {
  return (
    <div className='row'>
        {
            HeroData.map(hero => (
                <div key={hero.id} className="col-md-3 col-sm-6 hero-border">
                   <div className="text-center py-sm-3 my-3">
                   <h6 className='text-secondary'>{hero.heading}</h6>
                    {hero.money ? (<div className='d-md-flex justify-content-around'>
                            <h1 className='dash-text-color'>{hero.money}</h1>
                            { 
                                hero.heading === "PROFITS"  && ( 
                                <div className="color-info mt-3">
                                    <FaCaretUp className='icon-size' /> 
                                    <span>{hero.percent}</span>
                                </div>
                            )}
                            { 
                                hero.heading === "LOSSES"  && ( 
                                <div className="color-danger mt-3">
                                    <FaCaretDown className="icon-size" /> 
                                    <span>{hero.percent}</span>
                                </div>
                            )}
                            
                        </div> ): (
                        <div>
                            <span className='btn mx-2 currency-list'>
                                <FaEuroSign className='currency-icon-color' />
                            </span>
                            <span className='btn mx-2 currency-list'>
                                <FaYenSign className='currency-icon-color' />
                            </span>
                            <span className='btn mx-2 currency-list'>
                                <BsCurrencyBitcoin className='currency-icon-color' />
                            </span>
                            <span className='btn mx-2 currency-list'>
                                <FaDollarSign className='currency-icon-color' />
                            </span>
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