import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate(); 

  return (
    <header className="relative z-20 flex items-center justify-between p-6 max-w-7xl mx-auto 
                   backdrop-blur-md bg-white/70 rounded-full shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-purple-600">TaskFlow</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/signin')}
          className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
        >
          Register
        </button>
      </div>
    </header>
  );
}
