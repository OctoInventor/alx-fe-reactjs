import { useState } from 'react'
//import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= "bg-gray-100 p-8 max-w-sm-400 max-auto my-20 rounded-lg shawdow-lg">
          <UserProfile/>
      </div>
    </>
  )
}

export default App
