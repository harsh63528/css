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

function ranSum(num){
    let result=0;
    let str=num.toString()
    return function(){
        const value=str.split("")
        for(let i=0;i< value.length;i++){            //there was issue that value.length is 5 but the index no is from 0 to 4 
            console.log(`running ${value.length}`);
            result+=Number(value[i])
            console.log(result)
        }
         return result
    }
}

const value1=ranSum(63528)
console.log(value1())

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