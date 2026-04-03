 let para = document.querySelector('#para')

 let clickBtn = document.querySelector('#clickBtn')

   
 clickBtn.addEventListener('click', ()=>{
    console.log('first')
    para.textContent = 'Welcome to React'
 })