/**
 * map的基本使用
 */


let arr = [1,2,3,4,5]
let str = ['1','2','3']
arr.map((item,index,arr) =>{
    console.log(index,item,arr);
    return item*2
})



let intArr = str.map(item => parseInt(item))
let doubleArr = arr.map(item => item*2).filter(item=>item > 5)


console.log(intArr);
console.log(arr);
// console.log(mapArr);
console.log(doubleArr);