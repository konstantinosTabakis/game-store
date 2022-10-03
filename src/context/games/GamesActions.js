const api=  process.env.REACT_APP_API_URL

export const getGames = async ()=>{
    
    const response= await fetch(`${api}/games`)

    const data = await  response.json()
     
    return data
}

export const updateGame =async(id, newItm)=>{
    const response = await fetch(`${api}/games/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItm)
    })
     
    const data= await response.json()
}

   