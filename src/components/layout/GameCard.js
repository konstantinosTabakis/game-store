import { Link } from "react-router-dom"
import { BsHeartFill } from "react-icons/bs"
import GamesContext from "../../context/games/GamesContext"
import CartContext from "../../context/cart/CartContext"
import { useContext } from "react"
import { updateGame } from "../../context/games/GamesActions"

function GameCard({el}) {
  const {games,dispatch} = useContext(GamesContext)
  const {items,dispatcher} = useContext(CartContext)
  
  
  const heartColor= el.favorite ? '#D81E00': "#c8d8e5"
  
  const handleFav = ()=>{
    const newItm = {...el,favorite :!el.favorite}
    dispatch({type:'EDIT_GAME', payload: newItm })
    // updateGame(el.id, newItm)



    //********LOCAL STORAGE */
    const array = localStorage.getItem('favorites');
    const parsedArray = array ? JSON.parse(array) : [];

    const newArray =  parsedArray.includes(el.id)? parsedArray.filter((item)=> item!= el.id) : [...parsedArray, el.id]
    localStorage.setItem('favorites', JSON.stringify(newArray));

  }

  const addToCart = ()=>{
    dispatcher({type:'ADD_ITEM', payload: el })
  }
  return (
    <div className="card" key={el.title}>
              <div className="icon" >
                <BsHeartFill size="25px" color={heartColor} onClick={handleFav} />
              </div>
              <div className="centered">
                <Link to={`/games/${el.id}`} >         
                    <img className="main-img" src={require(`../../assets/img/products/${el.img_url}`)} />
                </Link>
              </div>
              <div className="card-title"> 
                <Link to={`/games/${el.id}`} > {el.title}</Link> 
                
              </div>
              <div className="price">{el.price}</div>
              <div className="centered">
                <button className="btn" onClick={addToCart}>Add to Cart</button>
              </div>
              
           </div>
  )
}

export default GameCard