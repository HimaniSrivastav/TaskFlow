import { LayoutDashboard, ClipboardCheck, UserCheck, FilePlus2   } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <div className="text-purple-700 font-bold text-2xl mb-6">TaskFlow</div>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <LayoutDashboard className="ml-2 w-5 h-5" /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <ClipboardCheck className="ml-2 w-5 h-5" /> Tasks
          <span className="ml-auto bg-purple-700 text-white text-xs px-2 py-0.5 rounded-full">5</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <UserCheck className="ml-2 w-5 h-5" /> Users
        </a>
      </nav>
      <div className="absolute bottom-6 left-4 flex items-center gap-3">
        <div className="bg-purple-700 text-white rounded-full p-2">JD</div>
        <div>
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-gray-500">Administrator</div>
        </div>
      </div>
    </aside>
  );
}
