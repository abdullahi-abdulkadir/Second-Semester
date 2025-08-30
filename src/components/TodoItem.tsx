import React from 'react'
import { CheckCircle, Circle, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo } from '../utils/api' // You’ll create this function

export default function TodoItem({ todo }) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']) // Refresh list
    },
  })

  const handleDelete = (e) => {
    e.stopPropagation()
    if (confirm('Are you sure you want to delete this todo?')) {
      mutation.mutate(todo.id)
    }
  }

  return (
    <li
      className="flex items-center justify-between border p-3 rounded bg-white shadow-sm hover:bg-gray-100 cursor-pointer transition"
      onClick={() => navigate(`/todos/${todo.id}`)}
    >
      <div className="flex items-center gap-2">
        {todo.completed ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <Circle className="text-gray-400" />
        )}
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.title}
        </span>
      </div>
      <Trash2
        className="text-red-500 hover:text-red-700 cursor-pointer"
        onClick={handleDelete}
      />
    </li>
  )
}
