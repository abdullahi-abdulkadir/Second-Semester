import React from 'react'
import { ListTodo, CheckCircle2, XCircle } from 'lucide-react' // Importing icons

export default function StatusFilter({ status, onStatusChange }) {
  const getButtonStyle = (btnStatus) =>
    `px-3 py-1 rounded flex items-center gap-2 ${
      status === btnStatus ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
    }`

  return (
    <div className="mb-4 flex gap-2 flex-wrap">
      <button onClick={() => onStatusChange('all')} className={getButtonStyle('all')}>
        <ListTodo size={16} />
        <span>All</span>
      </button>

      <button onClick={() => onStatusChange('completed')} className={getButtonStyle('completed')}>
        <CheckCircle2 size={16} />
        <span>Completed</span>
      </button>

      <button onClick={() => onStatusChange('incomplete')} className={getButtonStyle('incomplete')}>
        <XCircle size={16} />
        <span>Incomplete</span>
      </button>
    </div>
  )
}
