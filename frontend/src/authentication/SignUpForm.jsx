import  { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  AlertCircle,
  CheckCircle,
  User,
  Shield
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
  const inputType = showPassword !== undefined ? (showPassword ? "text" : "password") : type;
  
  return (
    <div className="space-y-1">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={inputType}
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
const SuccessMessage = ({ message }) => {
  return (
    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
      <CheckCircle className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
const PasswordStrengthIndicator = ({ password }) => {
  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(password);
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-full rounded-full ${
              i <= strength ? colors[strength - 1] : 'bg-gray-200'
            } transition-colors`}
          />
        ))}
      </div>
      <p className={`text-xs ${strength <= 2 ? 'text-red-600' : strength <= 3 ? 'text-yellow-600' : 'text-green-600'}`}>
        Password strength: {labels[strength - 1] || 'Very Weak'}
      </p>
    </div>
  );
};

const SignUpForm = ({ onSubmit, loading, errors, success }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = () => {
    onSubmit({ ...formData, acceptedTerms });
    window.location.href = '/signIn';

  };

  const handleSignIn = () => {
    console.log('Redirect to sign in page');
        window.location.href = '/signIn';

  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
      </div>

      {success && (
        <SuccessMessage message="Account created successfully! Please check your email to verify your account." />
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </div>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              error={errors.fullName}
              icon={User}
            />
          </div>

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
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
              icon={Lock}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />
            <div className="mt-2">
              <PasswordStrengthIndicator password={formData.password} />
            </div>
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </div>
            <Input
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              error={errors.confirmPassword}
              icon={Shield}
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
            />
            <div className="text-sm text-gray-600">
              I agree to the{' '}
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Terms of Service
              </button>{' '}
              and{' '}
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Privacy Policy
              </button>
            </div>
          </div>
          {errors.acceptedTerms && (
            <div className="flex items-center space-x-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.acceptedTerms}</span>
            </div>
          )}
        </div>

        {errors.general && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{errors.general}</span>
          </div>
        )}

        <Button onClick={handleSubmit} loading={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={handleSignIn}
            className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
// This code defines a SignUpForm component that includes input fields for full name, email, password, and confirm password.