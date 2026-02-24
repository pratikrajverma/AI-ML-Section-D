// let api = './data.json'

// fetch(api)
// .then(response=>{
//     // console.log(response)
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.log('error in api calling')
// })

// const parent = document.querySelector('#parent')

// async function getData(){
//     let response = await fetch(api)
//     let data = await response.json()
//     console.log(data)

//     data.forEach((element)=>{
//         let p = document.createElement('p')
//         p.textContent = element.name
//         parent.append(p)
//         console.log(p)
//     })
// }

// getData()



// real backend api data 
 const parent = document.querySelector('#parent')  

let api = 'https://dummyjson.com/products'

async function getApiData() {
    let response = await fetch(api)    
    // console.log(response)

    let data = await response.json()
    console.log(data.products)

    data.products.forEach((element)=>{
        console.log(element.images[0])

        let img = document.createElement('img')
        img.setAttribute('src', `${element.images[0]}`)
        parent.append(img)
        console.log(img)
    })


}

getApiData()