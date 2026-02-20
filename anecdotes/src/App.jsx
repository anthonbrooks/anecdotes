import { useState } from 'react'
import './App.css'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const votes = new Array(anecdotes.length).fill(0);
  const [voteCount, setVoteCount] = useState(votes);
  const current = anecdotes[selected];
  const mostVoted = voteCount.indexOf(Math.max(...voteCount));

  const handleRandomQuote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVote = () => {
    const copy = [...voteCount];
    copy[selected] += 1;
    setVoteCount(copy);
  }  

  return (
    <div>
      <h1>Today's Infinite Wisdom:</h1>
      <h3>{current}</h3>
      <p>has {voteCount[selected]} votes</p>
      <Button onClick={handleVote} text='vote' current={selected} />
      <Button onClick={handleRandomQuote} text='next anecdote' />
      <h2>Anecdote with the most votes:</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {voteCount[mostVoted]} votes</p>
    </div>
  )
}

export default App
