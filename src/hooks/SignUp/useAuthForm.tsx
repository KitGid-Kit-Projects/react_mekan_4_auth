// Import React's useState hook for managing state
import { useState } from 'react';

// Import navigation and location hooks from React Router for redirection
import { useNavigate, useLocation } from 'react-router-dom';

// Import Ant Design's Form hook for form instance control
import { Form } from 'antd';

// Import authentication context to use sign-in and sign-up methods
import { useAuth } from '@/context/AuthContext';

// Define structure of form data for both login and signup
interface AuthFormValues {
  email: string;              // User's email address
  password: string;           // User's password
  confirmPassword?: string;   // Optional field (used in signup mode)
}

// Define mode type — determines if form is for login or signup
type Mode = 'login' | 'signup';

// Custom hook for managing both login and signup form logic
export const useAuthForm = (mode: Mode) => {
  // Create a controlled Ant Design form instance
  const [form] = Form.useForm();

  // Track whether form submission (login/signup) is in progress
  const [loading, setLoading] = useState(false);

  // Extract authentication functions from AuthContext
  const { signIn, signUp } = useAuth();

  // React Router hook for page navigation
  const navigate = useNavigate();

  // React Router hook for accessing current location and state
  const location = useLocation();

  // Determine redirect path after successful login/signup
  // If user was redirected to login, go back to the original page (from state)
  // Otherwise, go to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // --- FORM SUBMISSION HANDLER ---
  // Called when form validation passes and user submits the form
  const onFinish = async (values: AuthFormValues) => {
    setLoading(true); // Start loading spinner

    try {
      // If current mode is login, call signIn function
      if (mode === 'login') {
        await signIn(values.email, values.password);
        navigate(from, { replace: true }); // Redirect to previous page or dashboard
      } 
      // Otherwise, create a new user account
      else {
        await signUp(values.email, values.password);
        navigate('/dashboard'); // Redirect to dashboard after signup
      }
    } catch (error) {
      // Handle any authentication errors
      console.error(`${mode} error:`, error);
    } finally {
      // Stop loading spinner whether success or failure
      setLoading(false);
    }
  };

  // Return useful data and functions for form components
  return { form, loading, onFinish };
};
