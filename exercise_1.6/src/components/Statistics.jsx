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
        <div>good: {good}</div>
        <div>neutral: {neutral}</div>
        <div>bad: {bad}</div>
        <div>all: {all}</div>
        <div>average: {(good - bad) / all}</div> {/* On a scale of -1 to 1 */}
        <div>positive: {good / all}</div>
      </>
    );
  }
};

export default Statistics;
