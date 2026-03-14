import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";

function App(){
  return(
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="stats">
          <StatCard title="Revenue" value="$12,450" />
          <StatCard title="Users" value="1,230" />
          <StatCard title="Orders" value="320" />
          <StatCard title="growth" value="+15%" />
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