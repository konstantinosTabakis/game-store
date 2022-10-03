import { useContext } from "react"
import GamesContext from "../../context/games/GamesContext"
import sortGames from "../../utilities/SortGames"
function SearchGames({selected}) {

  const {games, genres, sort_method, dispatch} =  useContext(GamesContext)

  const handleSortChange = (e) =>{
    dispatch({type:'GET_SORTED', payload: sortGames(games, e.target.value), method:e.target.value })
  }

  return (
    <div className="util-searches">
          <div className="left">
              <label htmlFor="genres">Genres</label>
              <select   id="genres" onChange={(e)=> selected(e.target.value)} defaultValue="all">
                <option value="all" > All</option>
                {genres.map((element) =>(
                  <option value={element} key={element}> {element}</option>
                ))}
              </select>
          </div>
          <div className="right">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" onChange={handleSortChange} defaultValue= {sort_method}>
                <option value="none">None</option>
                <option value="inc">Increasing price</option>
                <option value="dcr">Decreasing price</option>
              </select>
          </div>
    </div>
  )
}

export default SearchGames