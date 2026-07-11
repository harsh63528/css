// dom
const task=document.getElementById('task')
const btn=document.getElementById('btn')

// tasks 
const tasks=[];


btn.addEventListener('click',(e)=>{
    console.dir(task.value)
    let input=data(task.value)()
    add(input);
    injection(tasks)
})

// function for accessing the value
function data(value){
    // creating variable for storing value
    let info;
    return function(){

        // check wheteher the input task is empty or not if empty then it alert them
        // if it is not empty
        if(value !== ""){
            

        // storing the value in variable info [format:task,date,tag(task is completed or not),time]
        info={
            task:value,
            date:new Date().getDate(),
            tag:false
        }
        console.log(info)
    
        return
    }

    // if it is empty
    else{
        alert('task is empty')
    }
    }
}


// for adding the value in the tasks array   note:it is a prototype work needed
function add(value){
    console.log('from add'+ value)
    tasks.push(value)
}

// function for reloading the task or injecting html tag in the html
function injection(arr){
    console.log(arr)
    // looping array for each element
    arr.forEach(element => {
        console.log('from injection' + element)
        let task=document.createElement('p')
        task.classList.add('task');
        task.textContent= `task :${element.task}  date: ${element.date} `
        document.getElementById("tasks").appendChild(task)
    });
}