export default function TaskWidget () {
  const tasks = [
    { id: 1, title: "Design new landing page", status: "In Progress", priority: "High" },
    { id: 2, title: "Update user documentation", status: "Completed", priority: "Medium" },
    { id: 3, title: "Fix notification system", status: "Todo", priority: "High" },
    { id: 4, title: "Implement API integrations", status: "In Progress", priority: "Medium" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Todo': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white-600 rounded-3xl shadow-lg p-6 border-3 border-violet-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Latest Tasks</h3>
        <span className="text-purple-600 text-sm font-medium">5 pending</span>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="space-y-2">
            <h4 className="font-medium text-gray-800">{task.title}</h4>
            <div className="flex gap-2">
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};