import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGoodReviews = () => setGood(good + 1);
  const incrementNeutralReviews = () => setNeutral(neutral + 1);
  const incrementBadReviews = () => setBad(bad + 1);

  const statisticsProps = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={incrementGoodReviews} text="good" />
      <Button handleClick={incrementNeutralReviews} text="neutral" />
      <Button handleClick={incrementBadReviews} text="bad" />
      <Statistics {...statisticsProps} />
    </div>
  );
};

export default App;
