import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGoodReviews = () => setGood(good + 1);
  const incrementNeutralReviews = () => setNeutral(neutral + 1);
  const incrementBadReviews = () => setBad(bad + 1);
  const all = () => {
    const all = good + bad + neutral;
    return all === 0 ? 1 : all;
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={incrementGoodReviews} text="good" />
      <Button handleClick={incrementNeutralReviews} text="neutral" />
      <Button handleClick={incrementBadReviews} text="bad" />
      <h1>Statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {all()}</div>
      <div>average: {(good - bad) / all()}</div>
      <div>positive: {good / all()}</div>
    </div>
  );
};

export default App;
