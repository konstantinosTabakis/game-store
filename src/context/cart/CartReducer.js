const CartReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            const itemIndex= state.items.findIndex(el=>el.id===action.payload.id)
            console.log(itemIndex);
            if(itemIndex===-1){
                const item= {...action.payload, quantity:1}
                return{
                    ...state,
                    items: [...state.items,item],
                    total: state.total+1
                }
            }else{
                try{
                    
                    let updatedItems= [...state.items]
    
                    updatedItems[itemIndex].quantity++
                    return{
                        ...state,
                        items: updatedItems,
                        total: state.total+1
                    }
                }catch(e){
                    console.log(itemIndex);
                    console.log(e);
                }
            }
        
        default:
            return state
    }
}

export default CartReducer