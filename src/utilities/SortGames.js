const sortGames = (arr, value) =>{
    if(value==='none'){
        return [...arr]
    }else if(value=== 'inc'){
        return [...arr].sort((a,b) => parseFloat(a.price.slice(0,-1).replace(',','.')) - parseFloat(b.price.slice(0,-1).replace(',','.') ))
    }else{
        return [...arr].sort((a,b) => parseFloat(b.price.slice(0,-1).replace(',','.')) - parseFloat(a.price.slice(0,-1).replace(',','.') ))
    }
     

}

export default sortGames