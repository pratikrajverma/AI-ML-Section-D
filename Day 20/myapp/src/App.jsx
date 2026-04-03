import Fun1 from "./components/Fun1";
import Fun2 from "./components/Fun2";
import Fun3 from "./components/Fun3";
import Fun4 from "./components/Fun4";

function App(){
  let x  = 10;
  let name = 'ankit'


return(
  <div>
    {/* <p>Welcome to React</p>

    <h1>{x}</h1>

    <b>{name}</b>
      */}

      {/* <Fun1/> */}

      {/* <Fun2/>
      <Fun2/>
      <Fun2/>
      <Fun2/>
      <Fun2/>

      <Fun3/>

     <Fun4/> */}



     <Fun2 data={x}  data2={name}/>

  </div>
)

}


export default App