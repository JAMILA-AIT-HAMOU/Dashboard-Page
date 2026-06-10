import {FaMoon, FaSun} from "react-icons/fa"

function Header({toggleSidebar, toggleDarkMode, darkMode}){
  return(
    <header className="header">
      <button onClick={toggleSidebar}>☰</button>
      <input type="text" placeholder="Search..."/>
      <div className="header-right">
        <button onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        <span>🔔</span>
        <span>👤 Jamila</span>
      </div>
    </header>
  )
}

export default Header;