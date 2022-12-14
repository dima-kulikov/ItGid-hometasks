import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li> <NavLink exact className="nav_item"  to="/">Home</NavLink></li>
            <li> <NavLink exact className="nav_item" to="/note">Note</NavLink></li>
            <li> <NavLink exact className="nav_item" to="/create">Create</NavLink></li>
            <li> <NavLink exact className="nav_item" to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;