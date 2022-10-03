import { NavLink , Link } from "react-router-dom";
import {BsFillCartFill, BsList} from 'react-icons/bs'




function Header() {
  return (
    <nav className="container">
      <div className="container-wrapper">

        <div className="nav-inner">
            <div className="logo-wrapper">
                <div className="logo">Game Store</div>
            </div>
            <div className="right-nav">
              <div className="nav-links">
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                  <NavLink className="nav-link" to='/games'>Games</NavLink>
                  <NavLink className="nav-link" to='/favorites'>Favorites</NavLink>
                  <NavLink className="nav-link" to='/about'>About</NavLink>
                  <NavLink className=" nav-link-cart" to='/cart' ><BsFillCartFill size="25px"/> </NavLink>
              </div>
              <div className="ham-menu">
                <BsList size="35px"/>
              </div>

            </div>
            
        </div>
      </div>
    </nav>
  )
}

export default Header