import Header from "../component/homePage/Header";
import Background from "../component/Background";
import SignUpForm from "./SignUpForm";
import { useState } from "react"; 

export default function SignUp (){
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleBackToHome = () => {
    setShowLandingPage(true);
  };

  const validateForm = (formData) => {
    const newErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters long';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
        newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      }
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms acceptance validation
    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the Terms of Service and Privacy Policy';
    }

    return newErrors;
  };

  const handleFormSubmit = async (formData) => {
    const formErrors = validateForm(formData);
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Check if email already exists (simulate)
      if (formData.email === 'existing@example.com') {
        setErrors({ general: 'An account with this email already exists. Please sign in instead.' });
        return;
      }
      
      // Simulate success
      setSuccess(true);
      console.log('Account created successfully:', {
        fullName: formData.fullName,
        email: formData.email,
        // Don't log passwords in real applications
      });
      
      // Reset success message after delay
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (error) {
      setErrors({ general: 'Account creation failed. Please try again.' });
    } finally {
      setLoading(false);
    }
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
            <SignUpForm 
              onSubmit={handleFormSubmit}
              loading={loading}
              errors={errors}
              success={success}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
