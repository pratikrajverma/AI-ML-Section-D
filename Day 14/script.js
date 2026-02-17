// console.log('first')

// setTimeout(()=>{
//     console.log('second')
// },2000)


// setTimeout(() => {
//     console.log('forth')
// }, 0);

// console.log('third')



setTimeout(() => {
    console.log('first')
}, 0);

new Promise((resolve,reject)=>{
    resolve('promise resolve')
}).then((data)=>{
    console.log('second')
})

Promise.resolve().then(()=>{
    console.log('forth')
})

console.log('third')