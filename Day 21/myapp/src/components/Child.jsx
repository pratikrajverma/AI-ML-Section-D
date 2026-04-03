import React, { useState } from 'react'
const Child = ( ) => {
    // console.log(props.children)
    
    // let count = 10
     const[count, setCount] = useState(10)

    function clickHandler(){
        // console.log('first')
        //  count = count + 1
        // console.log(count)
        
        setCount(count+1)
        // console.log(count)

    }

    const minusHandler = ()=>{
        setCount(count-1)

    }


    const resethandler = ()=>{
        setCount(10)
    }



    function changeHandler(){
        console.log('first')
    }

    let show = true
    return (
        <div>
            {

                show ? <h1>hello world</h1>: <h1>this is react</h1>
            }
            {/* <p>{props.children}</p> */}
            
            <p>{count}</p>

            <button onClick={clickHandler}>Plus</button>
            <button onClick={minusHandler}>Minus</button>
            <button onClick={resethandler}>Reset</button>

            <input onChange={changeHandler}/>  
        </div>
    )
}

export default Child