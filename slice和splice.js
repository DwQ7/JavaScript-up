/**
 * slice用法---截取数组
 * 起始位置，结束位置（默认数组最后）
 * 返回截取的数组，不会影响原数组
 */


let str1 = 'flower'

let arr1 = str1.split('')


console.log(arr1)//['f', 'l', 'o', 'w', 'e', 'r']

console.log(arr1.slice(1)) //['l', 'o', 'w', 'e', 'r']

console.log(arr1.slice(1, 4))//['l', 'o', 'w'] 包括start但不包括end

console.log(arr1.slice(-1));//负数表示从数组后开始，可以看成arr.slice(length - 1)

console.log(arr1.slice(5));

console.log(arr1)//['f', 'l', 'o', 'w', 'e', 'r']
/**
 * splice添加或删除数组元素
 * 开始位置，长度（默认到结束），代替的元素（可选）
 * 返回删除的数组，会改变原数组
 */

console.log(arr1)//['f', 'l', 'o', 'w', 'e', 'r']

console.log(arr1.splice(1,3))//['l', 'o', 'w']

console.log(arr1)//['e', 'r']

console.log(arr1.splice(1, 0, 'o'))//[] 第二个参数为0，表示增加一个元素，这样不会有返回值
//表示在下标为1的地方添加一个'o'元素，后面的元素向后移动一位
console.log(arr1)//['f', 'o', 'e', 'r']
