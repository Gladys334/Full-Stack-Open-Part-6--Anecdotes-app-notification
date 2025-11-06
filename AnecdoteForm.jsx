import { useState } from 'react'
import { useNotificationDispatch } from './Context/NotificationContext'

const AnecdoteForm = ({ addNew }) => {
  const [content, setContent] = useState('')
  const dispatch = useNotificationDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    addNew(content)
    dispatch({ type: 'SET', payload: `You added "${content}"` })
    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, 5000)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new anecdote</h3>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your anecdote"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AnecdoteForm
