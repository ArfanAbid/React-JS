import { useEffect, useState } from 'react'
import {TodoProvider} from "./context/index"
import { TodoForm, TodoItem } from './components'


function App() {
  const [todos, setTodos] = useState([])

  // defining Todo context metods here 

  const addTodo =(todo) => {
        // setTodos(todo) // this is wrong it will delete all the previously added tasks so we use a callback here
        setTodos((prev) =>[{id:Date.now(), ...todo}, ...prev]) // maintain previous tasks and append them  Note: ... is spread operator
  }

  const updateTodo =(id,todo) => {
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo))) // this will match the id with the previous tasks id if matches i.e true then update with todo else remain prevTodo
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id)) // this will give us new array with only id not present in it. so it will filter all the elements except id
  }

  const toggleComplete=(id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?{...prevTodo,completed: !prevTodo.completed} : prevTodo )) // if id matches with the previous task id then ...prevTodo mean remain uncnhange all the elements but completed: mean change only this element property or override it 
  }

  // LocalStorage working

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    < TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div key={todo.id} className='w-full'> 
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>    
    </TodoProvider>
  )
}

export default App
