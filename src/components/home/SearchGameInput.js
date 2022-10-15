import GamesContext from "../../context/games/GamesContext"
import { useState, useContext } from "react" 
import { useNavigate } from "react-router-dom"

function SearchGameInput() {
  const navigate= useNavigate()
  const {games} = useContext(GamesContext)
  const [dropdownItems, setDropdownItems] = useState([])
  const [selected,setSelected] = useState('')

  const handleInput = (e) =>{
    setSelected(e.target.value)
    if(e.target.value.length>0){
      setDropdownItems(games.filter(el=> el.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }else{
      setDropdownItems([])
    }
  }

  const handleSelected = (e) => {
     setSelected(e.target.innerHTML)
     setDropdownItems([])
     window.scrollTo(0,0)
     navigate(`/games/${e.target.id}`)
  }
  const handleBlur = (e) =>{
    try{
      if(e.relatedTarget.className==='itm'){
        return 
      }else{
        setDropdownItems([])
      }
    }catch(e){
      setDropdownItems([])
    }
     
    
  }

  return (
    <section className='live-search'>
        <div className="live-search-inner centered">
            <h2 >
            Are you looking for a spesific game?
            </h2>
            <div className="input-area">
            
                <input type="text" placeholder='Search for a game' value={selected} onChange={handleInput} onBlur={(e)=> handleBlur(e)}  />
                <button className="btn-search">Search</button>
                {dropdownItems.length>0 && 
                  <div className="dropdown">
                    <ul className="dropdown-inner">
                      {
                        dropdownItems.map((el=>(
                          <li tabIndex="0" className="itm" onClick={handleSelected} id={el.id} key={el.id} > {el.title}</li>
                          )))
                      }
                      </ul>                      
                  </div>
                
                }
            </div>
        </div>
    </section>
  )
}

export default SearchGameInput