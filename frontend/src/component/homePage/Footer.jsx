export default function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold text-purple-600">TaskFlow</h4>
            <p className="text-sm text-gray-500">© 2024 TaskFlow. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
