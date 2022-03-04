import DashboardHeader from '../components/DashboardHeader'
import DashboardHero from '../components/DashboardHero'
import DashboardMain from '../components/DashboardMain'
import DashSidebar from '../components/DashSidebar'
import TeamComparison from '../components/TeamComparison'

const Dashboard = () => {
  return (
    <>
    <div className="row">
        <div className="col-lg-2">
            <DashSidebar />
        </div>
        <div className="col-lg-10 ps-5">
            <DashboardHeader />
            <DashboardHero />
            <DashboardMain />
            <TeamComparison />
        </div>
    </div>
    </>
  )
}

export default Dashboard