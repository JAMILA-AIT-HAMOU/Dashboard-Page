import activites from "../data/ActivitesData"


function RecentActivity(){
  return(
    <div className="activity-container">
      <h3>Recent Activity</h3>
      <table className="activity-table">
        <thead>
          <th>Users</th>
          <th>Actions</th>
          <th>Status</th>
        </thead>
        <tbody>
          {activites.map((activity)=>(
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