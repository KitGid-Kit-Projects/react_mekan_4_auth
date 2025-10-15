// Import authentication context to access sign-in function
import { useAuth } from "@/context/AuthContext";

// Import React's useState hook for managing local component state
import { useState } from "react";

// Import navigation and location hooks from React Router for redirects
import { useNavigate, useLocation } from "react-router-dom";

// Define the structure of login form values
interface LoginFormValues {
  email: string;    // User’s email address
  password: string; // User’s password
}

// Define the custom hook for managing login functionality
export const useLogin = () => {
  // Track loading state during login (e.g., to disable button or show spinner)
  const [loading, setLoading] = useState(false);

  // Extract signIn method from authentication context
  const { signIn } = useAuth();

  // Hook to navigate programmatically after login
  const navigate = useNavigate();

  // Hook to access the previous route user tried to visit before login
  const location = useLocation();

  // Determine where to redirect the user after successful login
  // If user came from a protected route, redirect them there; otherwise, go to /dashboard
  const from = location.state?.from?.pathname || "/dashboard";

  // --- LOGIN HANDLER FUNCTION ---
  // Handles the login process when the form is submitted
  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true); // Start loading spinner

    try {
      // Attempt to sign in using Firebase auth context
      await signIn(values.email, values.password);

      // Redirect the user to their intended destination (or dashboard)
      navigate(from, { replace: true });
    } catch (error) {
      // Log any login errors (could later be replaced with UI error message)
      console.error("Login error:", error);
    } finally {
      // Stop loading spinner regardless of success or failure
      setLoading(false);
    }
  };

  // Return the loading state and login handler for use in login form components
  return { loading, handleLogin };
};
