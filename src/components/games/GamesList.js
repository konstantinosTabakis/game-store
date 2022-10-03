import { useEffect, useState } from 'react'
import GameCard from '../layout/GameCard'
import findImage from '../../utilities/FindImage'
import { motion, AnimatePresence } from "framer-motion"

function GamesList({games}) {
  // const itemsPerPage= 6
  const [list, setList] = useState([])
  // const [currentPage, setCurrentPage] = useState(0)
  // const [totalPages, setTotalPages] = useState(0)
  
  useEffect(()=>{
    // setCurrentPage(0)
    // totalPagesCount()
    // handlePagination()
    setList(findImage(games))
  },[games])
  // useEffect(()=>{
     
  //   totalPagesCount()
  //   handlePagination()
     
  // },[currentPage])


   
   

  // const handlePagination = () =>{
  //   if(games.length>0){
  //     let displayItems=[]
  //     if(currentPage*itemsPerPage + itemsPerPage > games.length){
  //       games.forEach(element => {
  //         displayItems.push(element)
  //       })
  //     }else{
  //       for(let i=currentPage*itemsPerPage; i<currentPage*itemsPerPage +itemsPerPage; i++){
  //         displayItems.push(games[i])
  //       }
  //     }
  //     setList(findImage(displayItems))
  //   }
  // }
  // const totalPagesCount = () => {     
  //   setTotalPages(Math.ceil(games.length/ itemsPerPage))
  // }
  // const nextPage = () =>{
  //   if(currentPage+1<totalPages){
  //     setCurrentPage(currentPage+1)
  //     // handlePagination()
  //   }
  // }

  return (
    <>
    <div className="card-grid">
      {games.length>0 ? (
        <>
        <AnimatePresence>
          {list.map((game)=>(
            <motion.div key={game.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <GameCard el={game} key={game.title}/>
              
            </motion.div>
          ))}
        </AnimatePresence>
        </>

      ):(
        <>
          <div className="notItems">No items Found</div>
        </>
      )
      
      }
    </div>
     
    
    </>
  )
}

export default GamesList