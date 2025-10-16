// Import necessary React hooks and router utilities
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from 'antd'; // Ant Design's form utility for form instance management

// Define the structure for the authentication form values
interface AuthFormValues {
  email: string; // User email input
  password: string; // User password input
  confirmPassword?: string; // Optional field used only during signup
}

// Define valid modes for this hook: "login" or "signup"
type Mode = 'login' | 'signup';

// Custom hook that manages shared form logic for both login and signup
export const useAuthForm = (mode: Mode) => {
  // Create a new form instance using Ant Design's useForm hook
  const [form] = Form.useForm();

  // State to track loading (used to disable buttons and show spinners)
  const [loading, setLoading] = useState(false);

  // React Router hooks for navigation and location state
  const navigate = useNavigate(); // Used to programmatically redirect users
  const location = useLocation(); // Used to determine where the user came from

  // Determine the redirect path after successful login/signup
  // If redirected from a protected page, go there; otherwise, default to "/dashboard"
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // Function triggered when form validation passes and is submitted
  const onFinish = async (values: AuthFormValues) => {
    // Set loading state to true while processing
    setLoading(true);
    try {
      if (mode === 'login') {
        // TODO: Add your login logic here (e.g., Firebase or API authentication)
        // Example: await signInWithEmailAndPassword(auth, values.email, values.password);

        // Navigate to the previous route or dashboard upon successful login
        navigate(from, { replace: true });
      } else {
        // TODO: Add your signup logic here (e.g., create user in Firebase or API)

        // Navigate directly to the dashboard after successful signup
        navigate('/dashboard');
      }
    } catch (error) {
      // Log any errors for debugging
      console.error(`${mode} error:`, error);
    } finally {
      // Always turn off loading after the process completes
      setLoading(false);
    }
  };

  // Return the form instance, loading state, and submit handler for use in components
  return { form, loading, onFinish };
};
