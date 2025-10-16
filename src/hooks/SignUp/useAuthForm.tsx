// Import React state management hook
import { useState } from 'react';

// Import React Router hooks for navigation and route tracking
import { useNavigate, useLocation } from 'react-router-dom';

// Import Ant Design's Form utility for managing form state
import { Form } from 'antd';

// Import authentication context to access signIn and signUp functions
import { useAuth } from '@/context/AuthContext';

// --------------------------------------------
// 🔹 Define TypeScript interface for form fields
// --------------------------------------------
interface AuthFormValues {
  email: string;             // User's email
  password: string;          // User's password
  confirmPassword?: string;  // Optional: Used only for signup validation
}

// Define type for form mode — determines if the form is used for login or signup
type Mode = 'login' | 'signup';

// --------------------------------------------
// 🔹 Custom hook for managing authentication form
// --------------------------------------------
export const useAuthForm = (mode: Mode) => {
  // Initialize Ant Design form instance for form handling
  const [form] = Form.useForm();

  // Manage loading state for buttons / submission status
  const [loading, setLoading] = useState(false);

  // Destructure signIn and signUp methods from authentication context
  const { signIn, signUp } = useAuth();

  // React Router hook to navigate programmatically after login/signup
  const navigate = useNavigate();

  // React Router hook to access current route and potential redirect data
  const location = useLocation();

  // Determine redirect path after successful authentication
  // If the user was redirected from a protected route, send them back there
  // Otherwise, default to "/dashboard"
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // --------------------------------------------
  // 🔹 onFinish Handler — called when form is submitted
  // --------------------------------------------
  const onFinish = async (values: AuthFormValues) => {
    setLoading(true); // Start loading spinner

    try {
      if (mode === 'login') {
        // If in login mode, call the signIn method with email and password
        await signIn(values.email, values.password);

        // Redirect the user back to the page they came from or to dashboard
        navigate(from, { replace: true });
      } else {
        // If in signup mode, create a new account
        await signUp(values.email, values.password);

        // After successful signup, send user to the dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      // Catch and log any authentication errors
      console.error(`${mode} error:`, error);
    } finally {
      // Stop loading spinner regardless of outcome
      setLoading(false);
    }
  };

  // Return the form instance, loading state, and submit handler
  return { form, loading, onFinish };
};
