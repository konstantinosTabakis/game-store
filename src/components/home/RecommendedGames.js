import { useEffect,useState, useContext } from "react"
import groupAvatar from '../../assets/img/layout/GroupAvatar.png'
import circle from '../../assets/img/layout/Circle.png'
import GameCard from "../layout/GameCard"
import findImage from "../../utilities/FindImage"
import GamesContext from "../../context/games/GamesContext"


function RecommendedGames() {
    const {games, recommended, dispatch} = useContext(GamesContext)
    
    const [list,setList]= useState([])
    useEffect(()=>{
      if(recommended.length>0){
        setList(findImage(recommended))
      }
    },[recommended])

  return (
     <section className="recommended">
        <div className="centered icons">
          <img src={groupAvatar} alt="" />
        </div>
        <div className="centered heading">
        This weeks recomended products
        </div>
        <div className="card-grid">
        {list.map((el) => (
          <GameCard  el={el} key={el.id}/>
        ))}
        </div>
        <img src={circle} className="circle-sm circle" alt=""  />
        <img src={circle} className="circle-md circle" alt=""  />
     </section>
  )
}

export default RecommendedGames