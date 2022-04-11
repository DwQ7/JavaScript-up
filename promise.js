/**
 * promise async await用法
 */

//基本使用
// let pro = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         //1.直接resolve代表状态进入fulfilled
//         // resolve('qx')
//         //2.返回一个resolve
//         return resolve('qx')
//     },1000)
//     setTimeout(()=>resolve('qx'),1000)
//     setTimeout(()=> reject('err'),1000)
// })
//
// pro.then((name) => {
//     console.log(name);
// }).catch(err =>{
//     console.log(err);
// })

//封装网络请求
// function request(num){
//     return new Promise((resolve,reject)=>{
//         //模拟网络请求
//         console.log('访问url获取数据',num)
//         setTimeout(()=>{
//             //拿到结果通过resolve返回
//             resolve(num*2)
//         },2000)
//     })
// }
// request(5).then((res) =>{
//     console.log('获得数据',res)
//     console.log('继续访问');
//     request(res).then((res)=>{
//         console.log(res)
//     })
// })

//async await的使用
// let test = async function(){
//     setTimeout(()=>{
//        return 'res'
//     },1000)
// }
// console.log(test())
// let func = async function(){
//     const res1 = await request(5)
//     console.log(res1);
//     const res2 = await  request(res1)
//     console.log(res2);
//     return res2
// }
//
// func().then(res =>{
//     console.log(res * 2);
// })

class myPromise{
    constructor(executor){
        const self = this
        //当前的状态
        this.state = 'pending'
        //fulfilled时的值
        this.value = undefined
        //rejected的原因
        this.reason = undefined
        //储存
        this.successResolve = []
        this.successReject = []
        let resolve = value =>{
            if(self.state === 'pending'){
                self.state = 'fulfilled'
                self.value = value
                this.successResolve.forEach(f => f())
            }
        }
        let reject = reason =>{
            if(this.state === 'pending'){
                self.state = 'rejected'
                self.reason = reason
                this.successReject.forEach(f =>f())
            }
        }
        try{
            executor(resolve,reject)
        }catch (err){
            reject(err)
        }
    }
    then(onFulfilled,onRejected){
        console.log('test2');
        //同步
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }
        if(this.state === 'pending'){
            this.successResolve.push(()=>{
                onFulfilled(this.value)
            })
            this.successReject.push(()=>{
                onRejected(this.reason)
            })
        }
    }
}

function test(){
    return new myPromise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('test3');
            resolve('qx')
        },1000)
        console.log('test1');
        // reject('err')
    })
}
//为什么里面的异步任务不会有输出，因为异步任务是排在同步任务执行之后的
//首先执行test，构造promise对象，这里面的函数和构造函数同步进行的，碰到异步函数，先放一边
//继续执行，然后执行then，但是这时候因为resolve没有执行过，所以then里面不会执行任何函数
//过程结束，回去调用异步函数，但是then函数已经结束了
test().then(res=>{
    console.log(res);
},err =>{
    console.log(err);
})
