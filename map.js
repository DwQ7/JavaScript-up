/**
 * map的基本使用
 */

let num = 12321
//toString
let str = '12321'
//split
let arr = ['1','2','3','2','1']
//join
let newStr = '12321'

console.log(num.toString())
console.log(str.split(''))
console.log(str.split('').reverse())
console.log(str.split('').reverse().join(''))

// arr.map((item,index,arr) =>{
//     console.log(index,item,arr);
//     return item*2
// })
// let intArr = str.map(item => parseInt(item))
// let doubleArr = arr.map(item => item*2).filter(item=>item > 5)
//
//
// console.log(intArr);
// console.log(arr);
// // console.log(mapArr);
// console.log(doubleArr);

// let test = '1:2:3:4:5'
//
// console.log(test.split(''))
// console.log(test.split(':'))
// console.log(test.split('', 3))

//['1', ':', '2', ':', '3', ':', '4', ':', '5']
//['1', '2', '3', '4', '5']
//['1', ':', '2']

let test = ['1', '2', '3', '4', '5']
console.log(test.join(''))
console.log(test.join(':'))
console.log(typeof test.join(''));

// 12345
// 1:2:3:4:5
//string

console.log(test.reverse()) //['5', '4', '3', '2', '1']

// let map = new Map([
//     ['I',1],
//     ['V',5],
//     ['X',10],
//     ['L',50],
//     ['C',100],
//     ['D',500],
//     ['M',1000],
//     ['IV',4],
//     ['IX',9],
//     ['XL',40],
//     ['XC',90],
//     ['CD',400],
//     ['CM',900]
// ])

// let  qx = ['I','X','L']
//
// qx.forEach((item,index,arr) =>{
//     let str = item + arr[index+1]
//     // arr.splice(index+1,1)
//     console.log(str);
// })


let str1 = 'flower'
let str2 = 'flow'

let arr1 = str1.split('')
let arr2 = str2.split('')























