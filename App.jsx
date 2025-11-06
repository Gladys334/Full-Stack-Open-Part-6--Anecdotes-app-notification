import { useReducer, useEffect } from 'react'
import Notification from './Notification'
import { NotificationContextProvider } from './Context/NotificationContext'

const App = () => {
  return (
    <NotificationContextProvider>
      <div>
        <h2>Anecdote App</h2>
        <Notification />
        <p>If it hurts, do it more often</p>
        <button>vote</button>
      </div>
    </NotificationContextProvider>
  )
}

export default App
