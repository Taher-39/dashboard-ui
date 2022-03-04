import { Link } from 'react-router-dom'
import { SidebarItems } from '../Data/SidebarItems'

const DashboardSidebar = () => {
  return (
    <div className='sidebar-main row'>
        {
            SidebarItems.map(item => (
                <div key={item.id} className="text-center col-sm-3 col-xs-3" style={{minWidth: "100px"}}>
                    <Link to={`/${item.itemLink}`} className='my-4 mx-1 sidebar-item' >
                        <img className='img-fluid' src={item.itemImage} alt="source/img" />
                        <p>{item.itemName}</p>
                    </Link>
                </div>
            ))
        }

        <div>
            <Link className='btn' to="/signIn">Logout</Link>
        </div>
    </div>
  )
}

export default DashboardSidebar