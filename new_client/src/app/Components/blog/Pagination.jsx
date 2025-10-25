import React from 'react'

function Pagination({totalPages,currentPage}) {
  return (
    <div className="flex gap-2 justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500" : "bg-gray-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination