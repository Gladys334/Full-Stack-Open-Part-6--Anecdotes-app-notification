
import { useNotificationDispatch, setNotification } from './Context/NotificationContext'

const AnecdoteList = ({ anecdotes, vote }) => {
  const dispatch = useNotificationDispatch()

  const handleVote = (anecdote) => {
    vote(anecdote.id)
    setNotification(dispatch, `You voted for "${anecdote.content}"`, 5)
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
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
