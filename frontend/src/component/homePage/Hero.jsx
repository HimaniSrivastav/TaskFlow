import TaskWidget from "./TaskWidget";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold leading-tight">
          <span className="text-purple-600">Task Management</span>
          <br />
           <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h2> 
        
        <p className="text-xl text-gray-600 leading-relaxed">
          A beautifully designed platform to organize your work,
          collaborate with your team, and achieve your goals.
        </p>
         <div className="flex flex-col sm:flex-row gap-4">
         <button className="flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors cursor-pointer">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
            Explore Features
            <Sparkles className="ml-2 w-5 h-5" />
          </button>
        </div> 
      </div>
      
      {/* Task Widget */}
      <div className="relative">
        <TaskWidget />
      </div>
    </section>
  );
};