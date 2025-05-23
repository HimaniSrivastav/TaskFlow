import { BarChart3, CheckSquare, Clock, Users } from 'lucide-react'
import MetricCard from './MetricCard'
import ChartCard from './ChartCard'
import WeeklyTaskChart from './WeeklyTaskChart'  
import TaskStatusChart from './TaskStatusChart '
import * as Chart from 'chart.js'

// Register Chart.js components
Chart.Chart.register(
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.PointElement,
  Chart.LineElement,
  Chart.BarElement,
  Chart.Title,
  Chart.Tooltip,
  Chart.Legend,
  Chart.ArcElement
);


export default function TaskDashboard() {
  const metrics = [
    {
      title: "Total Tasks",
      value: "57",
      change: "+3.7 from last month",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Completed",
      value: "32",
      change: "+12% from last month",
      icon: CheckSquare,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "In Progress",
      value: "14",
      change: "+3 from last month",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Team Members",
      value: "12",
      change: "+2 this month",
      icon: Users,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Navigation Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-900 border-b-2 border-blue-500 pb-2 font-medium">
            Overview
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 pb-2">
            Analytics
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 pb-2">
            Team Activity
          </a>
        </nav>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            color={metric.color}
            bgColor={metric.bgColor}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Weekly Task Overview"
          subtitle="Completed vs pending tasks this week"
        >
          <WeeklyTaskChart />
        </ChartCard>

        <ChartCard
          title="Task Status"
          subtitle="Distribution by status"
        >
          <TaskStatusChart />
        </ChartCard>
      </div>
    </div>
  );
};