import { Search } from 'lucide-react'

export default function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        id='search'
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  )
}

