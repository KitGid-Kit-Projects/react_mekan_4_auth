// Import the authentication context hook to access Firebase sign-in
import { useAuth } from "@/context/AuthContext";

// Import React hook for managing component state
import { useState } from "react";

// Import navigation utilities from React Router
import { useNavigate, useLocation } from "react-router-dom";

// --- INTERFACE DEFINITION ---
// Defines the structure of the login form values
interface LoginFormValues {
  email: string; // User's email address
  password: string; // User's password
}

// --- CUSTOM HOOK DEFINITION ---
// A reusable hook that manages login logic, loading state, and navigation
export const useLogin = () => {
  // State variable to indicate loading during login process
  const [loading, setLoading] = useState(false);

  // Destructure signIn method from AuthContext
  const { signIn } = useAuth();

  // Hook to programmatically navigate between pages
  const navigate = useNavigate();

  // Hook to access current route location (for redirect handling)
  const location = useLocation();

  // --- REDIRECT TARGET ---
  // Determine where to redirect the user after successful login
  // Defaults to "/dashboard" if no previous page is specified
  const from = location.state?.from?.pathname || "/dashboard";

  // --- LOGIN HANDLER FUNCTION ---
  // Called when the user submits the login form
  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true); // Show loading state on button or spinner
    try {
      // Attempt to sign in with Firebase Authentication
      await signIn(values.email, values.password);

      // Redirect user to the intended route (or dashboard)
      navigate(from, { replace: true });
    } catch (error) {
      // Log any login errors for debugging
      console.error("Login error:", error);
    } finally {
      // Always disable loading spinner once done
      setLoading(false);
    }
  };

  // Return all relevant states and handlers to be used by components
  return { loading, handleLogin };
};
