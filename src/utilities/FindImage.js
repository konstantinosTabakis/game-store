const findImage= (arr)=>{
    const lst=arr.map((el)=>{
        return {...el, img_url: el.img_url.split('/').slice(-1)[0]}
    })

    return lst
}

export default findImage