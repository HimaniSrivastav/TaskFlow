import { ArrowRight } from 'lucide-react';

export default function CTASection(){
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-lg p-12 text-center border border-violet-800">
       <h3 className="text-3xl font-bold mb-4">
          <span className="text-purple-600">Ready to Transform</span>{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Your Workflow?
          </span>
        </h3>
        
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using TaskFlow to streamline their 
          tasks and projects.
        </p>
        
        <button className="flex items-center justify-center mx-auto px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors cursor-pointer">
          Start Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};