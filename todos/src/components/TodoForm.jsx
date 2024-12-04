import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, complete: false})
        setTodo('')
    }
  return (
    <form onSubmit={add} className="flex">
        <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a todo"
            className="flex-grow w-full pl-4 text-sm text-black border-b border-gray-300"
        />
        <button type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
            Add
        </button>
    </form>
  )
}

export default TodoForm