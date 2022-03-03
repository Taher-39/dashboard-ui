import {MainItems} from '../Data/MainItems'

const DashboardMain = () => {
    
  return (
    <div className='shadow my-5 p-4'>
        <div className="row">
            {
                MainItems.map(item => (
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