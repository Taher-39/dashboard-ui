import {TeamsData} from '../Data/TeamsData'
import {ComparisonData} from '../Data/ComparisonData'

const TeamComparison = () => {
  
  return (
   <div className="container">
      <div className='row'>
      <div className="col-md-6 team-members">
        <h2 className='mb-2 dash-text-color'>Team Members</h2>
        {
          TeamsData.map(item => (
            <div className="shadow p-2 my-2" key={item.id}>
              <div className="container d-flex justify-content-between">
                <div className="d-flex">
                    <img className='img-circle img-fluid' src={item.img} alt="img" />
                    <p className='pt-3 mx-3'>{item.name}</p>
                </div>
                <div>
                  <button className={`btn mt-2 team-btn ${item.position === 'Manager' && 'team-manager-color'} `}>{item.position}</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="col-md-6 comparison">
        <h2 className='mb-2 dash-text-color'>Comparison</h2>
        <div className="shadow container p-3">
          {
            ComparisonData.map(item => (
              <div key={item.id}>
                <div className="d-flex">
                  <img className='comparison-img' src={item.Flag} alt="flagImg" />
                  <h5 className='text-secondary px-4'>{item.country}</h5>
                </div>
                <div className={`my-3 comparison-border ${item.rate > 75 ? 'w-75' : item.rate > 50 ? 'w-50' : 'w-25'} `} ></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
   </div>
  )
}

export default TeamComparison