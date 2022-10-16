
import { useEffect, useContext } from 'react';
import GamesContext from '../context/games/GamesContext';
import { getGames } from '../context/games/GamesActions';
import getRandomItems from './GetRandomItems';
import getGenres from './GetGenres';
function FetchGames() {
  const { games, dispatch } = useContext(GamesContext)

  useEffect(() => {
    getItems()
  }, [])

  const getItems = (async () => {
    let data = await getGames()
    //****** * localStorage *******
    const array =  localStorage.getItem('favorites');
    const parsedArray = array ? JSON.parse(array) : [];
    data= data.map((game)=>parsedArray.includes(game.id)? {...game, favorite: true} : game)
    //********** */
    dispatch({ type: 'GET_GAMES', payload: data })
    dispatch({ type: 'GET_SORTED', payload: data })
    dispatch({ type: 'GET_RECOMMENDED', payload: getRandomItems(data) })
    dispatch({ type: 'GET_GENRES', payload: getGenres(data) })
  })

}

export default FetchGames