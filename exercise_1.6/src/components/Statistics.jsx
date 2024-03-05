const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const allAsDivider = () => {
    return all === 0 ? 1 : all;
  };

  return (
    <>
      <h1>Statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {all}</div>
      <div>average: {(good - bad) / allAsDivider()}</div>{" "}
      {/* On a scale of -1 to 1 */}
      <div>positive: {good / allAsDivider()}</div>
    </>
  );
};

export default Statistics;
