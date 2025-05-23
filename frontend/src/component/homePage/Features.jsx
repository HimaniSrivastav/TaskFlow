import { CheckCircle, Users, FileText, Zap } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="text-purple-500 w-6 h-6" />,
    title: "Task Management",
    description: "Create, assign, and track tasks with ease",
  },
  {
    icon: <Users className="text-blue-500 w-6 h-6" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team members",
  },
  {
    icon: <FileText className="text-cyan-500 w-6 h-6" />,
    title: "Document Storage",
    description: "Attach important files to your tasks",
  },
  {
    icon: <Zap className="text-sky-400 w-6 h-6" />,
    title: "Real-time Updates",
    description: "Get instant notifications on changes",
  },
];

export default function Features() {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Powerful Features</h2>
      <p className="text-gray-600 mt-2 mb-10 max-w-xl mx-auto">
        Everything you need to manage your tasks and boost your productivity in one place
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg w-64 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-full p-3 inline-block shadow mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
