import { useContext, useState, useEffect } from "react"
import GamesContext from "../context/games/GamesContext"
import GamesList from "../components/games/GamesList"
import SearchGames from "../components/games/SearchGames"
function Games() {

  const {sortedGames} = useContext(GamesContext)
  const [list, setList] =  useState(sortedGames)
  const [selected, setSelected] = useState('all')
  

  useEffect(()=>{
    handleGenre(selected)
  },[sortedGames])
  
  const handleSelect =  (genre) => {
    setSelected(genre)
    handleGenre(genre)
  }
  const handleGenre = (genre)=>{
    genre ==='all'? setList(sortedGames): setList(sortedGames.filter(el => el.genre===genre))
  }
  return (
    <div className="container">
      <div className="container-wrapper">
          <SearchGames selected={handleSelect}/>
          <GamesList games={list}  />
      </div>
    </div>
  )
}

export default Games