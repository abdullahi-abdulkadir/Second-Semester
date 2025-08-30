
import React from 'react'

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  if (!totalPages || totalPages < 1) return null

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex flex-wrap items-center justify-center mt-6 space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number ? 'bg-blue-600 text-white' : ''
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
