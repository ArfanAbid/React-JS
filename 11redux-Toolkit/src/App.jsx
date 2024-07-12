import { useState } from 'react'
import AddTodo from './components/AddTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-center p-2 text-3xl font-bold '>Redux-Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
