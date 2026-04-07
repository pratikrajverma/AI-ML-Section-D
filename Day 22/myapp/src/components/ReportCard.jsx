import React, { useState } from 'react'
import '../App.css'
import report from '../data'

const ReportCard = () => {

  const [reportState, setReportState] = useState(report)


  let newStudent = {
    name: '',
    marks: ''
  }


  function submitHandler(event) {
    event.preventDefault()

    
    newStudent.name = event.target.name.value.trim()
    newStudent.marks = event.target.marks.value.trim()
    
    
      setReportState((preData)=>{
        return [...preData, newStudent]
      })

    event.target.reset()
    
    console.log(event)
  

  }


  let TotalStudents = reportState.length


  let passedStudents = reportState.filter((item)=>{
      return item.marks >= 40
  }).length

 
  

  return (
    <div>

      {/* <p>Name : {report[0].name}</p>
        <p>Marks : {report[0].marks}</p>

        <p>Name : {report[2].name}</p>
        <p>Marks : {report[2].marks}</p>

        <p>Name : {report[3].name}</p>
        <p>Marks : {report[3].marks}</p>   */}

      <form onSubmit={submitHandler} >
        <input name='name' placeholder='name' />
        <input name='marks' placeholder='marks' />
        <button>Add </button>
      </form>

      <h2>Total Students : {TotalStudents}</h2>
      <h2>Passed Students : {passedStudents}</h2>
      <h2>Failed Students : {TotalStudents-passedStudents}</h2>
      <h2>Avg. Marks :</h2>

      {
        reportState.map((item, index) => {
          return <div key={index}>
                    <p>name :  {item.name} </p>
                    <p>Marks : {item.marks}</p>
                    <hr />
                </div>
        })

      }



    </div>
  )
}

export default ReportCard