// ==========================================sort algorithm ==============================================

//Bubble sort algorithm

// function bubblesort(arr){
 
//  return function (){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }

//     return arr;
//  }
// }

// let arr=[5,15,11,15,16,6,8,7,9,10,12,13,14]
// console.log(`array before sort=${arr}`)
// let v1=bubblesort(arr)
// console.log(`array after sort=${v1()}`)

// selection sort 

function selection(arr){
    let select;
    return function(){
        
        for(let i=0;i<arr.length;i++){
            select=i
           for(let j=0;j<arr.length;j++){
            arr.forEach((element,index) => {
                if(element>arr[i])  select=index
            });
           };
           arr[i]=select
        }
        return arr
    }
}

const arr=[10,5,1,8,6,3,2,4,7,9]
let k1=selection(arr)
console.log(k1())