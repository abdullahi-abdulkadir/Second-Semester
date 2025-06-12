import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTodo } from '../utils/api'
import { updateTodoOffline } from '../utils/dbHelpers'
import { useNavigate } from 'react-router-dom' // Optional if you want to redirect

export default function CreateTodoForm() {
  const [title, setTitle] = useState('')
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']) // Refresh todos
      setTitle('')
    },
    onError: async (err, newTodo) => {
      console.error('❌ Error creating todo:', err.message)

      // Save offline if online creation fails
      try {
        await updateTodoOffline(newTodo.id || Date.now(), newTodo)
        alert('Todo saved offline!')
        navigate('/') // Optional
      } catch (offlineErr) {
        console.error('❌ Error saving todo offline:', offlineErr)
        alert('Failed to save todo offline.')
      }
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return

    const newTodo = {
      userId: 1,
      id: Date.now(), // temporary ID for offline handling
      title: title.trim(),
      completed: false,
    }

    mutation.mutate(newTodo)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo..."
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}
