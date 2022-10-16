const GamesReduced = (state, action) =>{
    switch(action.type){
        case 'GET_GAMES':
            return{
                ...state,
                games: action.payload,
            }
        case 'GET_RECOMMENDED':
            return{
                ...state,
                recommended: action.payload,
            }
        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload,
            }
        case 'GET_SORTED':
            return{
                ...state,
                sortedGames: action.payload,
                sort_method: action.method
            }
        case 'EDIT_GAME':
            const updatedGame = action.payload;
            const updatedGames = state.games.map((game) => {
            if (game.id === updatedGame.id) {
                return updatedGame;
            }
            return game;
      });
            const updatedRecommended = state.recommended.map((game) => {
            if (game.id === updatedGame.id) {
                return updatedGame;
            }
            return game;
      });
            const updatedSorted = state.sortedGames.map((game) => {
            if (game.id === updatedGame.id) {
                return updatedGame;
            }
            return game;
      });

        return {
        ...state,
        games: updatedGames,
        recommended: updatedRecommended,
        sortedGames: updatedSorted
        }
        default:
            return state
    }
}

export default GamesReduced