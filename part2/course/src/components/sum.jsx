import React from 'react'


const Sum = ({ course }) => {
    let array = course.parts.map(x => x.exercises)
    let sum = array.reduce((s,p) => s+p)
    return <p>Sum of all exercises = {sum}</p>
  }
  
export default Sum;