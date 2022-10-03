import { useParams, Link} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import GamesContext from "../context/games/GamesContext"
import findImage from "../utilities/FindImage"
function GameDetails() {
  const params= useParams()
  const {games, dispatch} = useContext(GamesContext)
  const [game, setGame]= useState('')


  useEffect(()=>{
    if(games.length> 0){
      setGame( findImage(games.filter((el)=> el.id === params.id))[0] )
    }
  },[games])
  
  if(game===''){
    return(
      <div className="container">
        <div className="container-wrapper">
          <div className="centered">No item Found</div>
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="game-details">
          <div className="title centered">{game.title}</div>
          <div className="game-details-inner">
            <div className="col-left">
              <img src={require(`../assets/img/products/${game.img_url}`)} />
            </div>
            <div className="col-right">
              <div className="itm"> <span className="label"> Company: </span> {game.company} </div>
              <div className="itm"> <span className="label"> Genre: </span> {game.genre} </div>
              <div className="itm"> <span className="label"> Platform: </span> {game.platform} </div>
              <div className="itm"> <span className="label"> Price: </span> {game.price} </div>
            </div>
          </div>
          <div className="btns ">
            <button className="btn">
             <Link to="/games">All Games</Link>  
            </button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails