import React from 'react'

import Sum from './sum'
  const Course = ({ course }) => {
    return (
      <>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map((x) => (
            <li key={x.id}>
              {x.name} {x.exercises}
            </li>
          ))}
        </ul>
        <Sum course={course}/>
      </>
    );
  };

  export default Course;