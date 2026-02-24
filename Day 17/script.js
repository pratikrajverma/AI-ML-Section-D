// let x = 10;

// localStorage.setItem('x', x)


// let y = localStorage.getItem('x')

// console.log(y)


// let person = {
//     name:'Ankit',
//     age:24
// }



// localStorage.setItem('person', JSON.stringify(person))



// localStorage.removeItem('person')
// localStorage.removeItem('x')


// console.log(JSON.parse(localStorage.getItem('person')))


// let x = 10


// sessionStorage.setItem('x',x)


const city = document.querySelector('#city')
const addBtn = document.querySelector('#addBtn')
const history = document.querySelector('#history')

let cityNameList = JSON.parse(localStorage.getItem('city')) || []   

addBtn.addEventListener('click',()=>{
    history.textContent = ''
    // console.log(city.value)
    cityNameList.push(city.value)   
     
    localStorage.setItem('city',JSON.stringify(cityNameList))
    cityNameList = JSON.parse(localStorage.getItem('city'))
 
    cityNameList.forEach(element => {
        let p = document.createElement('p')
        console.log(element)
        p.textContent = element
        history.append(p)
    });

//    showData()
 
})





function showData(){
//       cityNameList = JSON.parse(localStorage.getItem('city'))
 
    cityNameList.forEach(element => {
        let p = document.createElement('p')
        console.log(element)
        p.textContent = element
        history.append(p)
    });
}


 showData()





