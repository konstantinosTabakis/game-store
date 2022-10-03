const getRandomItems = (arr) => {

    let items= []
    while(items.length <3){
        const item = arr[Math.floor(Math.random()*arr.length)]
        if(!items.some(itm => itm.title === item.title)){
            items.push(item)
        }
    }
    return items
}

export default getRandomItems