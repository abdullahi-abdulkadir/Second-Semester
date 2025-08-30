// components/EditTodoForm.jsx
import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTodo } from '../utils/api'

export default function EditTodoForm({ todo, onClose }) {
  const [title, setTitle] = useState(todo.title)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: (updatedTodo) => {
  console.log('✅ Updated todo:', updatedTodo)
  queryClient.invalidateQueries(['todos'])
  onClose()
}

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ ...todo, title })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="border rounded px-3 py-2 w-full"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Update
        </button>
        <button className="text-gray-500" onClick={onClose} type="button">
          Cancel
        </button>
      </div>
    </form>
  )
}
