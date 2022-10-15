import GamesList from "../components/games/GamesList"
import { useContext, useEffect, useState } from "react"
import GamesContext from "../context/games/GamesContext"
import { Link } from "react-router-dom"

function Favorites() {
  const { games } = useContext(GamesContext)
  const [favGames, setFavGames] = useState([])

  useEffect(() => {
    setFavGames(games.filter((game) => game.favorite))
  }, [games])
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="favorites content">
          <div className="title">
            Favorite Games
          </div>
          <GamesList games={favGames} />

          <div className="btns ">
            <Link className="btn" to="/games">All Games</Link>
            <Link className="btn" to="/cart">Open Cart</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Favorites