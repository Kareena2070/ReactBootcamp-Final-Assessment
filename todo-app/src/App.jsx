import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTododForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const API = "https://backendapi-cwp7.onrender.com/api/todos"

function App() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    fetch(API).then(res => res.json()).then(data => setTodos(data))
  }, [])


  const addTodo = async (title) => {
    setLoading(true)
    const res = await fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title })
    })

    const newTodo = await res.json()
    setTodos([...todos, newTodo])
    setLoading(false)
  }

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" })

    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = async (id, completed) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ completed: !completed })
    })

    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo))
  }

  const activeTodo = todos.filter(t => !t.completed)
  const completedTodod = todos.filter(t => t.completed)

  return (
    <>
      <div className="todoApp">

        <h1>Todo App</h1>

        <AddTododForm addTodo={addTodo} loading={loading} />

        <div className="todo-lists">
          <TodoList
          title="Active"
          todos={activeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo} />

        <TodoList
          title="Completed"
          todos={activeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo} />

        </div>
        

      </div>
    </>
  )
}

export default App