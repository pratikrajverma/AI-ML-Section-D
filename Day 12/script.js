function first(callback) {
    setTimeout(() => {
        console.log('first')

        callback()
    }, 4000);
}

function second(callback) {
    setTimeout(() => {
        console.log('second')
        callback()
    }, 2000);
}

function third() {
    setTimeout(() => {
        console.log('third')
    }, 1000);
}


first(()=>{
    second(()=>{
        third()
    })
})
 
// console.log('this is fun')
 

// console.log('hello world')


// function parent(callback){
//     console.log('this is parent')
//     callback()
// }

// function child(){
//     console.log('this is child')
// }

// parent(()=>{
//     child()
// })