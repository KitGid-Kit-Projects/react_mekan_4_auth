// Import the custom authentication context hook
import { useAuth } from "@/context/AuthContext";

// Import React's useState hook for local state management
import { useState } from "react";

// Import React Router hooks for navigation and location handling
import { useNavigate, useLocation } from "react-router-dom";

// Define the structure of the form values expected for login
interface LoginFormValues {
  email: string;    // User’s email address
  password: string; // User’s password
}

// Define a custom React hook that manages the login process
export const useLogin = () => {
  // Local state to track whether the login request is loading
  const [loading, setLoading] = useState(false);

  // Hook for programmatic navigation (redirecting users)
  const navigate = useNavigate();

  // Hook for accessing the current location (used to get redirect info)
  const location = useLocation();

  // Determine the redirect target after successful login
  // If redirected from a protected route, go there; otherwise, default to "/dashboard"
  const from = location.state?.from?.pathname || "/dashboard";

  // Main handler function for form submission
  const handleLogin = async (values: LoginFormValues) => {
    // Set loading state to true while processing login
    setLoading(true);
    try {
      // Here you would normally authenticate with Firebase or an API, e.g.:
      // await signInWithEmailAndPassword(auth, values.email, values.password);

      // After successful login, redirect user to the desired route
      navigate(from, { replace: true });
    } catch (error) {
      // Log any errors that occur during the login attempt
      console.error("Login error:", error);
    } finally {
      // Always reset the loading state when the process completes
      setLoading(false);
    }
  };

  // Return both the loading state and login handler
  return { loading, handleLogin };
};
