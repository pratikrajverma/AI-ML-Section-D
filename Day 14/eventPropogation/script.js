const parent = document.getElementById('parent')
const child = document.querySelector('#child')

parent.addEventListener('click',()=>{
    console.log('parent')
    
},true)


child.addEventListener('click',()=>{
    console.log('child')
    // event.stopPropagation()
},true)