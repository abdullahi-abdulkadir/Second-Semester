
import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import TodoItem from '../components/TodoItem'
import Pagination from '../components/Pagination'
import SearchFilter from '../components/SearchFilter'
import { fetchTodos, deleteTodo } from '../utils/api'
import CreateTodoForm from '../components/CreateTodoForm'

export default function TodoList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const todosPerPage = 10

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['todos', currentPage],
    queryFn: () => fetchTodos(currentPage, todosPerPage),
    keepPreviousData: true,
  })

  const filteredTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((todo) => {
      if (filter === 'completed') return todo.completed
      if (filter === 'notCompleted') return !todo.completed
      return true
    })

  const totalPages = Math.max(1, Math.ceil(200 / todosPerPage)) // jsonplaceholder has 200 todos total

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [currentPage, totalPages])

  if (isLoading) return <p role='status'>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Todo List</h1>

      <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CreateTodoForm />

      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded border ${filter === 'all' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded border ${filter === 'completed' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('completed')}
           aria-pressed={filter === 'completed'}
        >
          Completed
        </button>
        <button
          className={`px-3 py-1 rounded border ${filter === 'notCompleted' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('notCompleted')}
           aria-pressed={filter === 'not completed'}
        >
          Not Completed
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={{
              ...todo,
              title: `${index + 1}. ${todo.title}`,
            }}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
