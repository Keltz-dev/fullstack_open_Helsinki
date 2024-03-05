import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;

  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback gathered</div>
      </>
    );
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={(good - bad) / all} />
          {/* On a scale of -1 to 1 */}
          <StatisticLine text="positive" value={good / all} />
        </table>
      </>
    );
  }
};

export default Statistics;
