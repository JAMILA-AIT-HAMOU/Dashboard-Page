import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts"


const data=[
  {name:"Mon", users:200},
  {name:"Tue", users:300},
  {name:"Wed", users:250},
  {name:"Thu", users:400},
  {name:"Fri", users:350},
]



function BarChartComponent(){
  return(
    <div className="chart-container">
      <h3>Daily Users</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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