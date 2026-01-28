const Dec =  document.getElementById('Dec')
const reset =  document.getElementById('reset')
const Inc =  document.getElementById('Inc')
const displayBox = document.querySelector('#displayBox')

// console.log(Inc)
// console.log(Dec)
// console.log(reset)

let CounterValue = 0;




Inc.addEventListener('click',function(){
    // // console.log('this is increment')
    CounterValue = CounterValue + 2 ;
    // console.log(CouterValue)
     displayBox.textContent = CounterValue

} )
 
Dec.addEventListener('click', function(){
    CounterValue = CounterValue - 1;
    displayBox.textContent = CounterValue
})


 