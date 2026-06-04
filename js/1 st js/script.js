console.log('start')
fetch('https://dummyjson.com/test').then((res)=>{
    console.log(res.json())
})