import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import { useState } from "react";

function App(){

  const [isOpen, setIsOpen]=useState(true)
  const [darkMode, setDarkMode]=useState(false)

  return(
    <div className={`dashboard ${darkMode ? "darkMode" : ""}`}>
      <Sidebar isOpen={isOpen} />
      <div className="main-content">
        <Header toggleSidebar={()=>setIsOpen(!isOpen)}
          toggleDarkMode={()=>setDarkMode(!darkMode)}
          darkMode={darkMode}/>
        <div className="stats">
          <StatCard title="Revenue" value="$12,450" />
          <StatCard title="Users" value="1,230" />
          <StatCard title="Orders" value="320" />
          <StatCard title="Growth" value="+15%" />
        </div>
        <div className="charts">
          <LineChartComponent />
          <BarChartComponent />
        </div>
      </div>
    </div>
  )
}
export default App;