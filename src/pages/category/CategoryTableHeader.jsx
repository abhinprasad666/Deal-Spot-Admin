const CategoryTableHeader = () => (
    <thead className="bg-gray-100 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300">
        <tr className="h-12">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Label</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Updated At</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2 text-center">Actions</th>
        </tr>
    </thead>
);

export default CategoryTableHeader;
