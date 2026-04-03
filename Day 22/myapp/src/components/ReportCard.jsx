import React from 'react'
import report from '../data'

const ReportCard = () => {
    console.log(report)

    let name = 'Pratik'
    let marks = 90

  return (
    <div>
        <p>Name : {report[0].name}</p>
        <p>Marks : {report[0].marks}</p>
        <p>Name : {report[2].name}</p>
        <p>Marks : {report[2].marks}</p>
        <p>Name : {report[3].name}</p>
        <p>Marks : {report[3].marks}</p>


    </div>
  )
}

export default ReportCard