import { FaHeart, FaHome, FaThinkPeaks, FaBell, FaDashcube } from 'react-icons/fa';
import { MdOutlineAnalytics, MdLogout } from 'react-icons/md';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const DashSidebar = () => {
  return (
    <ProSidebar className='main-side'>
        <Menu iconShape="square">
            <MenuItem icon={<FaHome />}><Link className="btn " to="/">Home</Link></MenuItem>
            <SubMenu title="Admin" icon={<FaHeart />}>
                <MenuItem icon={<FaDashcube />}><Link to="/dashboard">Dashboard</Link></MenuItem>
                <MenuItem icon={<MdOutlineAnalytics />}><Link to="/analytics">Analytics</Link></MenuItem>
                <MenuItem icon={<FaThinkPeaks />}><Link to="/trading">Trading</Link></MenuItem>
                <MenuItem icon={<FaBell />}><Link to="/notification">Notification</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<MdLogout />}><Link className='btn btn-outline-success' to="/sign-in">Logout</Link></MenuItem>
        </Menu>
    </ProSidebar>
  )
}

export default DashSidebar