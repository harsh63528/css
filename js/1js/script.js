// 

// Q1 sum of all natural number

// function sum(num){
//     let result=0;
//     return function (){
        
//         for(let i=1;i<=num;i++){
//       result+=i;
//     }
//      return result
//     }

//     return result
// }

// const v1=sum(5)
// const v2=sum(10)
// console.log(`v1 :${v1()}`)
// console.dir(`v1 second time :${v1()}`)

// console.log(`v2 :${v2()}`)
// console.dir(`v2 second time :${v2()}`)

// sum of digit of number for eg 635284

// function ranSum(num){
//     let result=0;
//     let str=num.toString()
//     return function(){
//         const value=str.split("")
//         for(let i=0;i< value.length;i++){            //there was issue that value.length is 5 but the index no is from 0 to 4 
//             console.log(`running ${value.length}`);
//             result+=Number(value[i])
//             console.log(result)
//         }
//          return result
//     }
// }

// const value1=ranSum(63528)
// console.log(value1())

// palindrome number

// function palidrom(num){
//      let value=num.toString()
//      let palidrom=false;
//     return function(){
//        let valuearr=value.split("")
//        let reverseValue=[...valuearr].reverse()
//        for(let i=0;i<valuearr.length;i++){
//         if(Number(valuearr[i]) === Number(reverseValue[i])){
//             palidrom=true;
//         }
//         else{
//             palidrom=false;
//         }
//        }

//        return palidrom
//     }
// }

// const v1=palidrom(666)
// const v2=palidrom(5626589)

// console.log(`v1 ${v1()}`)
// console.log(`v2 ${v2()}`)


// fibuonacci number

// // function fibu(num){
// //     return function(){
// //         let init=0;
// //         let curr=1;
// //         let next;
// //         const arr=[];

        
// //             for(let i=0;i<= num;i++){
// //                 next=init+curr;
// //                 init=curr;
// //                 curr=next;
// //                 arr.push(next)
// //             }
// //             arr.reverse;
// //             return arr
// //     }
// // }

// let v1=fibu(10)
// console.log(v1())

// find missing value

// function missing(arr){
//     return function(){
//         let arrSum=0;
//         let expected=0;
//         for(let i=0;i<arr.length;i++){
//             console.log(arr[i])
//             arrSum+=arr[i];
//         }

//         for(let i=1;i<=arr.length;i++){
//             console.log(`expected ${i}`)
//             expected+=i
//         }

//         let output=expected-arrSum;
//         console.log(output)
//         console.log(arr)
//         return output
//     }
// }

// let v1=missing([1,0,3,4,5,6])
// v1()

// ======================================ARRAY========================================================

// q1 how to you check if a element in array is exist or not

// const arr=[1,2,3,4,5,9,4,6,654,8,321,545,52,123,165,]

// function check(num){
//     return function(){
//         let exist=false;
//     arr.forEach((element)=>{
//         if(element=== num){
//             exist=true
//         }
       
//     })
//     return exist
//     }
// }

// console.log(check(55)())

// =============================== STRING ==============================================================

// find word exist in string or not 

// function findString(str,i){
//     let type= typeof str
//     return function(){
//         if(type=== 'string'){
//             let value=str.includes(i)
//             return value

//         }
//         else{
//             console.log('i am not string')
//         }
        
//     }
// }

// const v1=findString('harsh','h')
// console.log(v1())

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

function binary(arr,value){
    console.log(arr)
    console.log(value)
   return function (){
    let mid= Math.floor((arr.length)/2)
    console.log(mid)
    for(let i=0;i<arr.length;i++){
        if(value=arr[mid]){
            console.log(mid)
            console.log(`${value}=== ${mid}`)
            return mid
        }
        else if(value<arr[mid]){
             console.log(`${value}< ${mid}`)
            let val=mid;
            mid=val/2;
        }
        else if(value>arr[mid]){
             console.log(`${value}> ${mid}`)
            let val2=mid;
            mid=val2*2
        }
    }
    return -1
   }
}

const k1=binary([1,2,3,4,5,6,7],10)
console.log(k1())