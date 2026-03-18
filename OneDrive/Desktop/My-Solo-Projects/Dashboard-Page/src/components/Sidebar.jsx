import {FaLayerGroup, FaHome, FaChartBar, FaFileAlt, FaCog} from "react-icons/fa"

function Sidebar({isOpen}){
  return(
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      
      <h2 className="logo">{ isOpen ? "Dashboard" : <FaLayerGroup />}</h2>
      <ul>
        <li>
          <FaHome />
          {isOpen && <span> Home</span>}
        </li>
        <li>
          <FaChartBar />
          {isOpen && <span> Analytics</span>}
        </li>
        <li>
          <FaFileAlt />
          {isOpen && <span> Reports</span>}
        </li>
        <li>
          <FaCog />
          {isOpen && <span> Settings</span>}
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;