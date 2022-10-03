const getGenres= (arr) =>{

    let genres= []
    arr.forEach(element => {
       if(!genres.includes(element.genre)){
        genres.push(element.genre)
       } 
    });
    return genres

}

export default getGenres