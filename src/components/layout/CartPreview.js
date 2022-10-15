import CartContext from "../../context/cart/CartContext"
import { useContext } from "react"
import { BsTrash } from "react-icons/bs"

function CartPreview({handleClick, handleBlur}) {
   
  const {items, total, dispatcher} = useContext(CartContext)


  const handleDelete = (game) => {
    dispatcher({type:'REMOVE_ITEM', payload: game })
  }

  
  return (
    <div className="cart-dropdown clickable" tabIndex="0" onBlur={(e)=> handleBlur(e)}>
      <div className="cart-dropdown-inner">
        <div className="cart-dropdown-title">
            Your Cart ({total})
        </div>
      {items.length>0 ? (
         <>
          <div className="item-list">
            <ul>
           {items.map((game)=>(
                <li  className="itm" key={game.id}> 
                  <div>{game.title}</div>  
                  <div><span> <span className="label">times:</span>  {game.quantity} </span>  <BsTrash size="18px" color="#D81E00" onClick={()=>handleDelete(game)}/></div> 
                
                </li>
           ))}
            </ul>
          </div>
         <button className="btn clickable" onClick={handleClick}>Open Cart</button>
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