/**
 * symbol的用法
 */

class Cache{
    static data = {}
    static set(name, value) {
        this.data[name] = value
    }
    static get(name){
        console.log(this.data[name])
        return this.data[name]
    }
}

let name =Symbol('name')
let key = Symbol('key')
let user = {
    name:'qx',
    // key:Symbol('用户信息')
    [key]:'123'
}

// user[key] = 456
// console.log(user)
// let cart = {
//     name: '购物车信息',
//     // key: Symbol('购物车信息')
//     key:'cart'
// }
//
// Cache.set(cart.key, '这是购物车存储的信息')
// Cache.set(user.key, '这是用户存储的信息')
// Cache.get(user.key) // 这是用户存储的信息
// Cache.get(cart.key) // 这里购物车存储的信息
// console.log(Cache.data) // { [Symbol(购物车信息)]: '这是购物车存储的信息', [Symbol(用户信息)]: '这是用户存储的信息' }

// cart.name = 'qx'
// console.log(cart);
