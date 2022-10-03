import { createContext, useReducer } from "react"
import GamesReduced from "./GamesReducer"

const GamesContext =  createContext()

export const GamesProvider =({children})=>{
    const initialState ={
        games : [],
        recommended: [],
        genres: [],
        sortedGames: [],
        sort_method: 'none'
    }

    const [state, dispatch] = useReducer (GamesReduced, initialState)

    return <GamesContext.Provider value={{...state, dispatch}}>
        {children}
        </GamesContext.Provider>

}

export default GamesContext