import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.part} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </div>
  );
};

const Total = (props) => {
  return(
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  );
};

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // const course = {
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       part: "Fundamentals of React",
  //       exercises: 10,
  //     },
  //     {
  //       part: "Using props to pass data",
  //       exercises: 7,
  //     },
  //     {
  //       part: "State of a component",
  //       exercises: 14,
  //     },
  //   ],
  // };

  // return (
  //   <div>
  //     <Header course={course}/>
  //     <Content course={course}/>
  //     <Total course={course}/>
  //   </div>
  // );
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
