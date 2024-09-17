import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <UserProfile/>
        </a>
      </div>
    </>
  )
}

export default App
