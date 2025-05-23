export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white border-b">
      <div>
        <div className="text-xl font-semibold">Good evening, John</div>
        <div className="text-gray-500">Here's what's happening today</div>
      </div>
      <div className="space-x-4">
        <button className="bg-purple-600 text-white font-medium px-4 py-3 rounded-md cursor-pointer">+ Create Task</button>
      </div>
    </header>
  );
}