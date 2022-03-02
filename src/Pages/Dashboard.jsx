import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import DashboardHero from '../components/DashboardHero'
import DashboardMain from '../components/DashboardMain'
import DashboardSidebar from '../components/DashboardSidebar'
import TeamComparison from '../components/TeamComparison'

const Dashboard = () => {
  return (
    <>
    <div className="row">
        <div className="col-md-2">
            <DashboardSidebar />
        </div>
        <div className="col-md-10">
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