// dom
const task=document.getElementById('task')
const btn=document.getElementById('btn')

// tasks 
const tasks=[];

// function for accessing the value
function data(value){
    // creating variable for storing value
    let info;
    return function(){

        // check wheteher the input task is empty or not if empty then it alert them
        // if it is not empty
        if(value !== false){

        // storing the value in variable info [format:task,date,tag(task is completed or not),time]
        info={
            task:value,
            date:date.getDate,
            tag:false
        }
    
        return info
    }

    // if it is empty
    else{
        alert('task is empty')
    }
    }
}


// for adding the value in the tasks array   note:it is a prototype work needed
function add(value){
    tasks.push(value)
}

// function for reloading the task or injecting html tag in the html
function injection(arr){
    // looping array for each element
    arr.array.forEach(element => {
        let 
    });
}