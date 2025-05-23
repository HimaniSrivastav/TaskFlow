export default function TaskFilter() {
  return (
    <div className="flex items-center gap-4 mb-4">
      <input type="text" placeholder="Search tasks..." className="border px-3 py-2 rounded w-64" />
      <select className="border px-2 py-2 rounded">
        <option>Status</option>
      </select>
      <select className="border px-2 py-2 rounded">
        <option>Priority</option>
      </select>
      <input type="date" className="border px-3 py-2 rounded" />
      <button className="text-gray-500 underline">Reset</button>
    </div>
  );
}
