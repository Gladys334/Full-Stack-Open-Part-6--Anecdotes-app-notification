
import { useReducer, useEffect } from 'react'
import Notification from './Notification'
import { NotificationProvider } from './Context/NotificationContext'

const App = () => {
  return (
    <NotificationProvider>
      <div>
        <h2>Anecdote App</h2>
        <Notification />
        <p>If it hurts, do it more often</p>
        <button>vote</button>
      </div>
    </NotificationProvider>
  )
}

export default App
