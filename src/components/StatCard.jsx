import CountUp from "react-countup"

function StatCard({title, value, prefix="", suffix=""}){
  return(
    <div className="stat-card">
      <h3>{title}</h3>
      <p>
        <CountUp 
          end={value}
          duration={2}
          separator=","
          prefix={prefix}
          suffix={suffix}
       />  
      </p>
    </div>
  )
}

export default StatCard