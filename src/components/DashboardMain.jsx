import {MainItems} from '../Data/MainItems'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'

const DashboardMain = () => {
    
  return (
    <div className="container">
        <div className='shadow my-5 p-4'>
        <div className="row">
            {
                MainItems.map(item => (
                    <div className="col-md-4 col-lg-2 col-sm-6 text-center" key={item.id}>
                        <p className='text-secondary'>{item.country}</p>
                       <div>
                            <h2 className='d-inline'>{item.rate}</h2>
                           <span> 
                            {
                                item.rate > 150 ? <FaCaretUp className='color-info icon-size mb-3 ms-2' /> : <FaCaretDown className='icon-size color-danger mb-3 ms-2' />
                            }
                            </span>
                       </div>
                        <p>-------</p>
                    </div>
                ))
            }
        </div>        
    </div>
    </div>
  )
}

export default DashboardMain