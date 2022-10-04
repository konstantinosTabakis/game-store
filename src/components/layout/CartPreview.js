import CartContext from "../../context/cart/CartContext"
import { useContext } from "react"


function CartPreview({handleClick}) {
   
  const {items, total} = useContext(CartContext)


  const goToCart = () => {

  }

  
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-inner">
        <div className="cart-dropdown-title">
            Your Cart ({total})
        </div>
      {items.length>0 ? (
         <>
          <div className="item-list">
            <ul>
           {items.map((game)=>(
                <li className="itm" key={game.id}> <div>{game.title}</div>  <div> <span className="label">times:</span>  {game.quantity}</div> </li>
           ))}
            </ul>
          </div>
         <button className="btn" onClick={handleClick}>Open Cart</button>
         </>
      ):(
        <>
          <div className="notItems">No items in the cart</div>
        </>
      )
      
      }
      </div>
    </div>
  )
}

export default CartPreview