import { useState } from 'react'
import SignInForm from './SignInForm'
import Background from '../component/Background'
import Header from '../component/homePage/Header'


const SignIn = () => {
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleBackToHome = () => {
    setShowLandingPage(true);
  };

  if (showLandingPage) {
    return <div className="text-center p-8">Redirecting to landing page...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <Background />
      <Header onBackToHome={handleBackToHome} />
      
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <SignInForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;