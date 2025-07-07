"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageRange = () => {
    const range = [];
    const maxVisible = 5;
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed border rounded-lg cursor-pointer"
      >
        <ChevronLeft className="inline" size={16} />
        Previous
      </button>

      <div className="flex items-center gap-1">
        {getPageRange().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer
              ${
                currentPage === page
                  ? "text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  : "border text-gray-500"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium border rounded-lg transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          text-gray-500 cursor-pointer"
      >
        Next
        <ChevronRight className="inline" size={16} />
      </button>
    </div>
  );
};

export default Pagination;
