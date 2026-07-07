const btn=document.getElementById('btn')
const task=document.getElementById('task')

btn.addEventListener('click',(e)=>{
    alert('i am working')
     const info={
        inp: e.target.value,
        date:date.getDate
    }
    console.log(info)
    console.dir(Date)
})


// function add(info){
//     const info={
//         inp: info,
//         date:date.getDate
//     }
// }