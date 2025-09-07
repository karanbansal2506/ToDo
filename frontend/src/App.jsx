import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
      <CreateToDo></CreateToDo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
