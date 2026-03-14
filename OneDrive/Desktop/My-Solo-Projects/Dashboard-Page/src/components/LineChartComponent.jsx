import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts"


const data=[
  {name:"Jan", sales:400},
  {name:"Feb", sales:300},
  {name:"Mar", sales:500},
  {name:"Apr", sales:700},
  {name:"May", sales:600},
]

function LineChartComponent(){
  return(
    <div className="chart-container">
      <h3>Monthly Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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