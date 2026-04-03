import { useState } from "react"

function App(){

  const[para, setPara] = useState('Welcome to Javacript')

  function clickHandler(){
   if(para === 'Welcome to Javacript'){
    setPara('Welcome to React Js')
   }else{
    setPara('Welcome to Javascript')
   }
  }

 
  return(
    <div>
      {/* <p>this is para content</p>
      <h1>this is heading </h1>
      <b>Welcome to React Js</b> */}
        <p>{para}</p>
 
        <button onClick={clickHandler}>Click Me</button>



    </div>
  )

}

export default App