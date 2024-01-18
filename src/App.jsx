import { useState } from 'react'
import './App.css'
import UserIndex from './User/userIndex'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserIndex/>
    </>
  )
}

export default App
