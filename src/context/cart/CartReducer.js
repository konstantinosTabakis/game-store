const CartReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            const itemIndex= state.items.findIndex(el=>el.id===action.payload.id)
            if(itemIndex===-1){
                const item= {...action.payload, quantity:1}
                return{
                    ...state,
                    items: [...state.items,item],
                    total: state.total+1,
                    total_cost: state.total_cost + parseFloat(action.payload.price.slice(0,-1).replace(',','.'))
                }
            }else{
                try{
                    
                    let updatedItems= [...state.items]
    
                    updatedItems[itemIndex].quantity++
                    return{
                        ...state,
                        items: updatedItems,
                        total: state.total+1,
                        total_cost: state.total_cost + parseFloat(action.payload.price.slice(0,-1).replace(',','.'))
                    }
                }catch(e){
                    console.log(itemIndex);
                    console.log(e);
                }
            }
        case 'REMOVE_ITEM':
            
            return{
                ...state,
                items: state.items.filter((el)=> el.id !== action.payload.id),
                total: state.total - action.payload.quantity,
                total_cost: state.total_cost - (action.payload.quantity* parseFloat(action.payload.price.slice(0,-1).replace(',','.'))) 
            }
        case 'DCR_QUANTITY':
            const itmIndex= state.items.findIndex(el=>el.id===action.payload.id)
            let updatedItems= [...state.items]
            updatedItems[itmIndex].quantity--
            return{
                ...state,
                items: updatedItems,
                total: state.total-1,
                total_cost: state.total_cost - parseFloat(action.payload.price.slice(0,-1).replace(',','.'))
            }
        case 'INC_QUANTITY':
            let updateItems= [...state.items]
            updateItems[state.items.findIndex(el=>el.id===action.payload.id)].quantity++
            return{
                ...state,
                items: updateItems,
                total: state.total+1,
                total_cost: state.total_cost + parseFloat(action.payload.price.slice(0,-1).replace(',','.'))
            }
        
        default:
            return state
    }
}

export default CartReducer