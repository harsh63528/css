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

// step 1: start
// step 2:create a function
function selection(arr){

// step 3:create variable for storing selected element index in array
let selectIndex;
// step 4:create loop for checking if the all elements are looped
for(let i=0;i < arr.length;i++){
    selectIndex=i;
    // step 5:create subloop for checking if the selected elemet is smaller than everyone present in loop or not
    // step 6:if the selected element is not smaller than compare element then take that elemnt index else do nothing
    // step 7:do setep 6 for all the element 
    for (let j=i+1;j>arr.length;j++){
        if(arr[j]>arr[selectIndex]){
            console.log(`${arr[j]} is smaller than ${arr[selectIndex]}`)
            selectIndex=j;
        }
    }
if(selectIndex !== i){
    let temp=arr[i];
    arr[selectIndex]=arr[i];
    arr[i]=temp
}

}
return arr
// step 8: exist subloop check if all the element arre check if checked then exist loop 

}

console.log(selection([6,3,5,3,2,4]))