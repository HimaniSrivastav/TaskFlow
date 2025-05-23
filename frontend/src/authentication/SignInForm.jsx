import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft,
  Sun,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

// Input Component
const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  icon: Icon,
  showPassword,
  onTogglePassword,
  ...props 
}) => {
  return (
    <div className="space-y-1">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={showPassword !== undefined ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 ${Icon ? 'pl-10' : ''} ${type === 'password' ? 'pr-10' : ''} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
            error ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
          }`}
          {...props}
        />
        {type === "password" && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <div className="flex items-center space-x-1 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

// Button Component
const Button = ({ children, variant = "primary", loading = false, disabled = false, ...props }) => {
  const baseClasses = "w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2";
  
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${
        (loading || disabled) ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      <span>{children}</span>
    </button>
  );
};

// Success Message Component
const SuccessMessage = ({ message }) => {
  return (
    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
      <CheckCircle className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    window.location.href = '/dashboard';

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSuccess(true);
      console.log('Login successful:', formData);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ email: '', password: '' });
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    console.log('Redirect to sign up page');
  };

  const handleForgotPassword = () => {
    console.log('Redirect to forgot password page');
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Login</h2>
        <p className="text-gray-600">Enter your credentials to access your account</p>
      </div>

      {success && (
        <SuccessMessage message="Login successful! Redirecting..." />
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </div>
            <Input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
              icon={Mail}
            />
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </div>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
              icon={Lock}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </div>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {errors.general && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{errors.general}</span>
          </div>
        )}

        <Button onClick={handleSubmit} loading={loading}>
          {loading ? 'Signing in...' : 'Login'}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={handleSignUp}
            className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
export default SignInForm;