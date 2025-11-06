
import { useState } from 'react'
import { useNotificationDispatch, setNotification } from './context/NotificationContext'

const AnecdoteForm = ({ addNew }) => {
  const [content, setContent] = useState('')
  const dispatch = useNotificationDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    addNew(content)
    setNotification(dispatch, `You added "${content}"`, 5)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new anecdote</h3>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
