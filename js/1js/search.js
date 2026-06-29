// =======================================searching algorithm ===========================================

// linear search algorithm

// q1 finding a number eixst in a array or not

// function search(arr,num){
//     let exist=false;
//  return function (){
//     let obj=[]
//     arr.forEach((element,index) => {
//         if(element===num){
//         exist=true;
//          obj.push({
//             present: exist,
//             place:index,
//             value:element
//         })
        
//         }

        
//     });
//      if(obj.length >=1) return obj
//      return exist;

//  }
// }

// const v1=  search([1,2,6,8,7,6,9,,56,2,4,6,],6)
// console.log(v1())


// Binary search algorithm

// function binary(arr,value){

//     // console array and value
//     arr.sort()
//     console.log(`array: ${arr}`)

//     console.log(`Value before loop : ${value}`)

//     // returning function
//    return function (){

//     // finding middle index
//     let left=0;
//     let right=arr.length-1;
//     let mid= Math.floor((left+right)/2)
    
//     // displaying middle index
//     console.log(`middle value before loop : ${mid}`)


    
//         for (let i=0;i<arr.length;i++){
//             console.log(`i am runn`)
//             if(value===arr[mid]){
//                 console.log(`i am running`)
//         return ({
//             value:value,
//             index:mid,
//             array_value:arr[mid]
//         })
//     }
//             else if(value>arr[mid]) {
//                 console.log(`mid right:${mid}`)
//                 mid=(mid+ arr.length)/2
//             }
//             else if(value<arr[mid]){
//                 console.log(`mid left:${mid}`)
//                 mid=Math.floor((0+mid)/2)
//             }
//             else{
//                 return -1;
//             }
//         }
//     }
    
//    }


// const k1=binary([50,30,80,10,20,40],80)
// console.log(k1())