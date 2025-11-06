import { createContext, useContext, useReducer } from 'react'

// Create the context
const NotificationContext = createContext()

// Reducer to control the notification state
const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

// Context provider component
export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, '')

  return (
    <NotificationContext.Provider value={[notification, dispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

// Custom hooks to use the context
export const useNotificationValue = () => {
  const [notification] = useContext(NotificationContext)
  return notification
}

export const useNotificationDispatch = () => {
  const [, dispatch] = useContext(NotificationContext)
  return dispatch
}

// ✅ Helper function for Exercise 6.24
export const setNotification = (dispatch, message, seconds = 5) => {
  dispatch({ type: 'SET', payload: message })
  setTimeout(() => {
    dispatch({ type: 'CLEAR' })
  }, seconds * 1000)
}
