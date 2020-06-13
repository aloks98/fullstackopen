import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const Statistics = ({ text, value }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
      return <div>No Feedback Given</div>;
    }
    return (
      <tr>
        <td>
          {text} {value}
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h1>Give Feedback~</h1>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />

      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistics text="Good" value={good} />
          <Statistics text="Neutral" value={neutral} />
          <Statistics text="Bad" value={bad} />
          <Statistics
            text="Average"
            value={(good - bad) / (good + bad + neutral)}
          />
          <Statistics
            text="Positive"
            value={(good * 100) / (good + bad + neutral)}
          />
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
