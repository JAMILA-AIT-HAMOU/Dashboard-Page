import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";

import { salesData } from "../data/chartData";




function LineChartComponent({period, setPeriod}){

  
const chartData=salesData[period]

  return(
    <div className="chart-container">
      <h3>Sales</h3>
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
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default LineChartComponent;