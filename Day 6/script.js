//  const child1 =  document.getElementById('child1');

//  console.log(child1)


// const para = document.getElementsByClassName('para')

// for(let i = 0; i<para.length; i++){
//     console.log(para[i])
// }


// const bold = document.querySelector('#bold')
// console.log(bold)

// const para = document.querySelectorAll('p')
// for(let i = 0; i<para.length; i++){
//     console.log(para[i])
// }


// const para1 = document.querySelector('#para1');

// console.log(para1.textContent)

// // console.log(para1.innerText);

//  para1.textContent = 'this is new child';

// console.log(para1)

//  let x =  document.getElementById('para1')
//  console.log(x)


const ptag =   document.createElement('p')

ptag.textContent = 'this is ptag by dom'


const parent = document.querySelector('#parent')
parent.append(ptag)


// parent.removeChild(ptag)

// ptag.setAttribute('id','child1')
// ptag.setAttribute('style', 'background-color:red;')


// ptag.removeAttribute('style')

// ptag.style.backgroundColor = 'red';
// ptag.style.height = '100px';

// ptag.style.cssText = 'color:red; height:100px; background-color:pink;'


