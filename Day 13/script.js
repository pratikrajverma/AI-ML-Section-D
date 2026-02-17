// // console.log('first')

// // try{
// //     consosdfdle.log('first')
// // }catch(error){
// //     console.log('error in first code')
// // }




// function first() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             try {

//                 console.log('first')
//                 resolve('first completed')

//             } catch (error) {
//                 reject('error in first')
//             }
//         }, 4000);
//     })
// }

// // console.log(first())


// // function second() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             try {
// //                 console.log('second')
// //                 resolve('second completed')
// //             } catch (error) {
// //                 reject('error in second')
// //             }
// //         }, 2000);
// //     })
// // }


// function second() {
    
//         setTimeout(() => {
//             try {
//                 console.log('second')
                 
//             } catch (error) {
                 
//             }
//         }, 2000);
   
// }

// function third() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 console.log('third')
//                 resolve('third completed')
//             } catch (error) {
//                 reject('error in third')
//             }
//         }, 1000);
//     })
// }





// // first().then((data)=>{
// //     return second()
// // }).then((data)=>{
// //     third()
// // }).catch((data)=>{
// //     console.log(data)
// // })


// // first().then(()=>second())
// // .then(()=>third())


// // let fun = ()=>{
// //     return 10
// // }

// // let fun2 = ()=>10;


// async function runMyCode() {
//     await first()

//     await second()

//     await third()
// }

// runMyCode()



console.log('first')


setTimeout(() => {
    console.log('second')
}, 0);


console.log('third')


Promise.resolve().then(()=>{
    console.log('forth')
})