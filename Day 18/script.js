// // let person = {
// //     name:"Ankit",
// //     age:24
// // }

// // // console.log(person)



// // localStorage.setItem('person', JSON.stringify(person))

// // let x = JSON.parse(localStorage.getItem('person'))


// // console.log(x)

// // localStorage.removeItem('person')

// let person = {
//     name:"Ankit",
//     age:24
// }

// // console.log(person)



// sessionStorage.setItem('person', JSON.stringify(person))

// let x = JSON.parse(sessionStorage.getItem('person'))


// // console.log(x)

// // localStorage.removeItem('person')



// let person = {
//     name:'Ankit'
// }

// document.cookie = `person = ${JSON.stringify(person)}`



// function sum(a,b,c){
//     return a+b+c
// }

// let result = sum(1,2,3)
// console.log(result)



// function currying...........................

// function sum(a){
//     return function(b){

//         return function(c){

//             return a+b+c
//         }
//     }
// }


// let result = sum(1)(2)(3)

// console.log(result)



// function discount(percent, totalValue){
//     return percent * totalValue /100
// }

// console.log( discount(10, 500))


// console.log(discount(10, 1000))

// console.log(discount(10, 1200))

// console.log(discount(10, 300))


function discount(percent){
    return function(totalValue){
        return percent * totalValue / 100
    }
}
 

let result = discount(20)

console.log((result(1000)))
console.log((result(1200)))
console.log((result(400)))
console.log((result(5000)))




