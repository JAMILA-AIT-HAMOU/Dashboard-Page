

function Header({toggleSidebar}){
  return(
    <header className="header">
      <button onClick={toggleSidebar}>☰</button>
      <input type="text" placeholder="Search..."/>
      <div className="header-right">
        <span>🔔</span>
        <span>👤 Jamila</span>
      </div>
    </header>
  )
}

export default Header;