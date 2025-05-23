export default function TestimonialSection () {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            AC
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm text-gray-500">
              Product Manager @ AppTech
            </div>
            <div className="text-lg font-medium text-purple-600">Alex Chen</div>
            <p className="text-gray-700 leading-relaxed">
              TaskFlow has transformed how our team manages projects. The 
              interface is intuitive, and the features are exactly what we need. 
              The biggest impact has been on our productivity—we've seen a 
              40% increase in completed tasks since implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};