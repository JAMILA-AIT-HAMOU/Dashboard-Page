import activites from "../data/ActivitesData"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"


function RecentActivity(){

  const [searchTerm, setSearchTerm]= useState("")
  const filteredActivities =activites.filter(activity=>(
    activity.user.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  return(
    <div className="activity-container">
      <h3>Recent Activity</h3>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
      <table className="activity-table">
        <thead>
          <th>Users</th>
          <th>Actions</th>
          <th>Status</th>
        </thead>
        <tbody>
          {filteredActivities.map((activity)=>(
            <tr key={activity.id}>
              <td>{activity.user}</td>
              <td>{activity.action}</td>
              <td>
                <span className={`status ${activity.status.toLowerCase()}`}>{activity.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RecentActivity