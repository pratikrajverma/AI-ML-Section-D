function Fun2(props){

    console.log(props)

    let z = 10
return(
    <div>
        <p>This is content 1</p>
        <input/>
        <p>data from parent : {props.data}</p>

        <h1>{props.data2}</h1>
    </div>
)

}

export default Fun2