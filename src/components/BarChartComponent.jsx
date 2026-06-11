import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts"
import { usersData } from "../data/chartData";





function BarChartComponent({period, setPeriod}){
 
const chartData=usersData[period]
  return(
    <div className="chart-container">
      <h3>Users</h3>
      <div className="chart-filters">
        <button
          className={period === "weekly" ? "active" :""}
          onClick={()=>setPeriod("weekly")}>Weekly
        </button>
        <button
          className={period === "monthly" ? "active" :""}
          onClick={()=>setPeriod("monthly")}>Monthly
        </button>
        <button
          className={period === "yearly" ? "active" :""}
          onClick={()=>setPeriod("yearly")}>Yearly
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
           <Bar dataKey="users" fill="#10b981"/>

        </BarChart>

      </ResponsiveContainer>
    </div>
  )
}
export default BarChartComponent;