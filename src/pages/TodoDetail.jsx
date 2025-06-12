
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTodoById } from '../utils/api'
import { ArrowLeftCircle, LoaderCircle } from 'lucide-react'
import EditTodoForm from '../components/EditTodoForm'
import { useState } from 'react'


export default function TodoDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
const [isEditing, setIsEditing] = useState(false)
  const { data: todo, isLoading, isError, error } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodoById(id),
  })

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600">
        <LoaderCircle className="animate-spin" size={32} />
        <span className="ml-2">Loading...</span>
      </div>
    )

  if (isError)
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    )

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeftCircle size={20} className="mr-1" />
        Back to List
      </button>

      <div className="border rounded-lg p-6 shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Todo Details
        </h2>

        <p className="text-gray-700 mb-2">
          <span className="font-medium">ID:</span> {todo.id}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Title:</span> {todo.title}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Completed:</span>{' '}
          <span
            className={`inline-block px-2 py-1 rounded text-sm font-medium ${
              todo.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {todo.completed ? 'Yes' : 'No'}
          </span>
        </p>


        {isEditing ? (
        <EditTodoForm todo={todo} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <p className="text-lg mb-2">{todo.title}</p>
          <p>Status: {todo.completed ? '✅ Completed' : '❌ Not Completed'}</p>
          <button
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit Todo
          </button>
        </div>
      )}
      </div>
    </main>
  )
}

