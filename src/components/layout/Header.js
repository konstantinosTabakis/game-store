import { NavLink } from "react-router-dom";
import { BsFillCartFill, BsList } from 'react-icons/bs'
import { useState, useEffect, useContext, useRef } from "react";
import CartContext from "../../context/cart/CartContext";
import CartPreview from "./CartPreview";
import { useNavigate } from "react-router-dom"


function Header() {
  const navigate = useNavigate()
  const [color, setColor] = useState({ background: '#F5F5F5' })
  const { total } = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)
  const nav_links = useRef()
  const ham_icon = useRef()
  
  

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setColor({ background: '#fdfafa' })
      } else {
        setColor({ background: '#F5F5F5' })
      }
    })
  })

  const handleCart = () => {
    setShowCart(!showCart)
  }
  const handleBlur = (e) => {
    try {
      if (e.relatedTarget.className.includes('clickable')) {
        return
      } else {
        setShowCart(false)
      }
    } catch (e) {
      setShowCart(false)
    }
  }

  const goToCart = () => {
    setShowCart(false)
    navigate('/cart')
  }
  const openMenu= ()=>{
    nav_links.current.classList.add('show')
  }
  const closeMenu= (e)=>{
    try {
      if (e.relatedTarget.className.includes('nav-link')) {
        setTimeout(()=>{
          nav_links.current.classList.remove('show')
          // ham_icon.current.focus()
        },50)
        return
      } else {
        nav_links.current.classList.remove('show')
      }
    } catch (e) {
      nav_links.current.classList.remove('show')
    }
  }

  return (
    <nav className="nav" style={color}>
      <div className="nav-inner">
        <div className="logo-wrapper">
          <div className="logo" onClick={() => navigate('/')}>Game Store</div>
        </div>
        <div className="right-nav">


          <div className="nav-links" ref={nav_links}>
            <NavLink className="nav-link" to='/' end>Home</NavLink>
            <NavLink className="nav-link" to='/games'>Games</NavLink>
            <NavLink className="nav-link" to='/favorites'>Favorites</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
          </div>


          <div className="ham-menu" tabIndex='0' ref={ham_icon} onClick={openMenu} onBlur={closeMenu}>
            <BsList size="35px" />
          </div>

          <div className="cart-link-wrapper">
            {/* <NavLink className=" nav-link-cart" to='/cart' ><BsFillCartFill size="25px"/> </NavLink> */}
            <span className="nav-link-cart"> <BsFillCartFill tabIndex='0' size="25px" onClick={handleCart} onBlur={(e) => handleBlur(e)} /></span>
            {total > 0 ?
              <>
                {total > 9 ?
                  <div className="cart-count">9+</div>
                  : <div className="cart-count-single"> {total}</div>
                }
              </>
              : null
            }
          </div>


          {showCart && <CartPreview handleClick={goToCart} handleBlur={handleBlur} />}

        </div>

      </div>

    </nav>
  )
}

export default Header