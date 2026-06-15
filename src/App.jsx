import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import { useState } from "react";
import RecentActivity from "./components/RecentActivity";

function App(){

  const [isOpen, setIsOpen]=useState(true)
  const [darkMode, setDarkMode]=useState(false)
  const [period, setPeriod]=useState("monthly")

  return(
    <div className={`dashboard ${darkMode ? "darkMode" : ""}`}>
      <Sidebar isOpen={isOpen} />
      <div className="main-content">
        <Header toggleSidebar={()=>setIsOpen(!isOpen)}
          toggleDarkMode={()=>setDarkMode(!darkMode)}
          darkMode={darkMode}/>
        <div className="stats">
          <StatCard title="Revenue" value={12450}  prefix="$" />
          <StatCard title="Users" value={1230} />
          <StatCard title="Orders" value={320}/>
          <StatCard title="Growth" value={15} prefix="+" suffix="%"/>
        </div>
        <div className="charts">
          <LineChartComponent 
            period={period}
            setPeriod={setPeriod}/>
          <BarChartComponent
            period={period}
            setPeriod={setPeriod} />
        </div>
        <RecentActivity />
      </div>
    </div>
  )
}
export default App;