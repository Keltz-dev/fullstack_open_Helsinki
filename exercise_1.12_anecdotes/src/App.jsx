import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const generateRandomNumber = () => {
    const rnd = Math.floor(Math.random() * anecdotes.length);
    return rnd != selected ? rnd : generateRandomNumber();
  };

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const mostUpvoted = (anecdotes) => anecdotes[votes.indexOf(Math.max(...votes))]

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>votes: {votes[selected]}</div>
      <button onClick={() => setSelected(generateRandomNumber())}>
        next anecdote
      </button>
      <button onClick={handleVote}>vote</button>
      <h1>Most voted for:</h1>
      <div>{mostUpvoted(anecdotes)}</div>
    </>
  );
};

export default App;
