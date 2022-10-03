 
import { useEffect, useContext } from 'react';
import GamesContext from '../context/games/GamesContext';
import { getGames } from '../context/games/GamesActions';
import getRandomItems from './GetRandomItems';
import getGenres from './GetGenres';
function FetchGames() {
    const {games, dispatch} = useContext(GamesContext)

  useEffect(  ()=>{
    getItems()
 },[])

 const getItems =( async()=>{
   const data= await getGames()
    
   dispatch({type:'GET_GAMES', payload: data})
   dispatch({type:'GET_SORTED', payload: data})
   dispatch({type:'GET_RECOMMENDED', payload: getRandomItems(data)})
   dispatch({type:'GET_GENRES', payload: getGenres(data)})
 })
  
}

export default FetchGames