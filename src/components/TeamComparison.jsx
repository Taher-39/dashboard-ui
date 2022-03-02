import {TeamsData} from '../Data/TeamsData'
import {ComparisonData} from '../Data/ComparisonData'

const TeamComparison = () => {
  
  return (
    <div className='row'>
      <div className="col-md-6 team-members">
        <h2 className='mb-2'>Team Members</h2>
        {
          TeamsData.map(item => (
            <div className="shadow p-2 my-2" key={item.id}>
              <div className="container d-flex justify-content-between">
                <div className="d-flex">
                    <img style={{ width: "50px", height: "50px", borderRadius: "50%"}} className='img-fluid' src={item.img} alt="img" />
                    <p className='pt-3 mx-3'>{item.name}</p>
                </div>
                <div>
                  <button style={{backgroundColor: "lightBlue", border: "500px"}} className='btn mt-2'>{item.position}</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="col-md-6 comparison">
        <h2 className='mb-2'>Comparison</h2>
        <div className="shadow container p-3">
          {
            ComparisonData.map(item => (
              <div key={item.id}>
                <div className="d-flex">
                  <img style={{ width: "50px", height: "40px", border: "1px solid gray"}} src={item.Flag} alt="flagImg" />
                  <h5 className='text-secondary px-4'>{item.country}</h5>
                </div>
                <p className='my-3'>{item.rate}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TeamComparison