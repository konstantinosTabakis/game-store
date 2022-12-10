import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/cart/CartContext"
import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt } from "react-icons/fa"
import CheckOutForm from "../components/cart/CheckOutForm"

function Cart() {
  const { items, total_cost, dispatcher } = useContext(CartContext)
  const [showForm, setShowForm] = useState(false)
  const handleDelete = (game) => {
    dispatcher({ type: 'REMOVE_ITEM', payload: game })
  }

  const dcr = (game) => {
    if (game.quantity === 1) {
      dispatcher({ type: 'REMOVE_ITEM', payload: game })
    } else {
      dispatcher({ type: 'DCR_QUANTITY', payload: game })
    }
  }
  const inc = (game) => {
    dispatcher({ type: 'INC_QUANTITY', payload: game })
  }

  const closeForm = ()=>{
    setShowForm(false)
  }


  if (items.length === 0) {
    return (
      <div className="centered content">No items found</div>
    )
  }

  return (
    <div className="container">
      <div className="container-wrapper">
        <section className="cart-area ">
          <div className="cart-area-inner">
            {items.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="left-itm">
                  <img src={require(`../assets/img/products/${item.img_url}`)} />
                </div>
                <div className="right-itm">
                  <div className="title">{item.title} </div>
                  <div> Quantity :  <button onClick={() => dcr(item)}><FaMinusCircle  className="util-btn"  /></button>  <span className="quantity">{item.quantity}</span> <button onClick={() => inc(item)}> <FaPlusCircle className="util-btn"  /></button> </div>
                  <div>Price: <span className="item-price">{item.price}</span> </div>
                  <div className="delete-icon"> <FaRegTrashAlt className="util-btn" onClick={() => handleDelete(item)} /></div>
                </div>

              </div>
            ))}
            <div className="centered total">Total: <span className="total-price">{total_cost.toFixed(2)}</span> </div>
            <div className="btns">
              <Link className="btn" to="/games">All Games</Link>
              <button className="btn" onClick={()=> setShowForm(true)}>Checkout</button>
            </div>

          </div>
        </section>
        {showForm && < CheckOutForm closeForm={closeForm} />}
        

      </div>
    </div>

  )
}

export default Cart