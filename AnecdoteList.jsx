import { useNotificationDispatch } from './Context/NotificationContext'

const AnecdoteList = ({ anecdotes, vote }) => {
  const dispatch = useNotificationDispatch()

  const handleVote = (anecdote) => {
    vote(anecdote.id)
    dispatch({ type: 'SET', payload: `You voted for "${anecdote.content}"` })

    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
