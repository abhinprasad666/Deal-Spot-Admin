const Pagination = ({ currentPage, totalPages, onPrevious, onNext, startIndex, itemsPerPage, totalItems }) => (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-300">
        <span>
            Showing {totalItems === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} categories
        </span>
        <div className="space-x-2">
            <button
                onClick={onPrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
                Previous
            </button>
            <button
                onClick={onNext}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    </div>
);

export default Pagination;
