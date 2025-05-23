const tasks = [
  {
    title: "Update user documentation",
    description: "Update the user documentation with the latest features",
    status: "In Progress",
    priority: "High",
    due: "Jun 25, 2024",
    assigned: "Sarah Johnson",
    docs: 2,
  },
  {
    title: "Fix login page bug",
    description: "Fix the bug on the login page that prevents users from logging in",
    status: "Completed",
    priority: "High",
    due: "Jun 20, 2024",
    assigned: "Michael Chen",
    docs: 1,
  },
  {
    title: "Design new dashboard",
    description: "Create a new design for the dashboard",
    status: "Todo",
    priority: "Medium",
    due: "Jun 30, 2024",
    assigned: "Emily Davis",
    docs: 3,
  },
  {
    title: "Implement file upload",
    description: "Implement the file upload functionality",
    status: "In Progress",
    priority: "Medium",
    due: "Jul 5, 2024",
    assigned: "Robert Wilson",
    docs: "None",
  },
  {
    title: "Review pull requests",
    description: "Review and merge pull requests",
    status: "Todo",
    priority: "Low",
    due: "Jul 10, 2024",
    assigned: "Jessica Brown",
    docs: "None",
  },
];

export default function TaskTable() {
  return (
    <table className="w-full table-auto border-t">
      <thead className="text-left">
        <tr>
          <th className="p-2">Title</th>
          <th className="p-2">Status</th>
          <th className="p-2">Priority</th>
          <th className="p-2">Due Date</th>
          <th className="p-2">Assigned To</th>
          <th className="p-2">Documents</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, idx) => (
          <tr key={idx} className="border-t text-sm">
            <td className="p-2">
              <div className="font-medium">{task.title}</div>
              <div className="text-gray-500 text-xs">{task.description}</div>
            </td>
            <td className="p-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {task.status}
              </span>
            </td>
            <td className="p-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                task.priority === 'High' ? 'bg-red-100 text-red-700' :
                task.priority === 'Medium' ? 'bg-orange-100 text-orange-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {task.priority}
              </span>
            </td>
            <td className="p-2">{task.due}</td>
            <td className="p-2">{task.assigned}</td>
            <td className="p-2">{task.docs}</td>
            <td className="p-2">...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
