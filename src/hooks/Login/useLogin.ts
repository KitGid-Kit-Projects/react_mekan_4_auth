// Import authentication context to access sign-in function
import { useAuth } from "@/context/AuthContext";

// Import React's useState and useRef hooks for managing local component state
import { useState, useRef } from "react";

// Import navigation and location hooks from React Router for redirects
import { useNavigate, useLocation } from "react-router-dom";

// Import ReCAPTCHA component and types
import ReCAPTCHA from "react-google-recaptcha";

// Define the structure of login form values
interface LoginFormValues {
  email: string;    // User's email address
  password: string; // User's password
}

// Define the custom hook for managing login functionality
export const useLogin = () => {
  // Track loading state during login (e.g., to disable button or show spinner)
  const [loading, setLoading] = useState(false);
  
  // State for CAPTCHA error
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  // Ref for reCAPTCHA component
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Extract signIn method from authentication context
  const { signIn } = useAuth();

  // Hook to navigate programmatically after login
  const navigate = useNavigate();

  // Hook to access the previous route user tried to visit before login
  const location = useLocation();

  // Determine where to redirect the user after successful login
  // If user came from a protected route, redirect them there; otherwise, go to /dashboard
  const from = location.state?.from?.pathname || "/dashboard";

  // Your reCAPTCHA site key (use test key for development)
  const RECAPTCHA_SITE_KEY = import.meta.env.REACT_APP_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  // --- LOGIN HANDLER FUNCTION ---
  // Handles the login process when the form is submitted
  const handleLogin = async (values: LoginFormValues) => {
    // Reset CAPTCHA error
    setCaptchaError(null);
    
    // Get CAPTCHA token
    const captchaToken = recaptchaRef.current?.getValue();
    
    // Validate CAPTCHA
    if (!captchaToken) {
      setCaptchaError("Lütfen reCAPTCHA doğrulamasını tamamlayın");
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      // Attempt to sign in using Firebase auth context
      await signIn(values.email, values.password);

      // Reset CAPTCHA on success
      recaptchaRef.current?.reset();

      // Redirect the user to their intended destination (or dashboard)
      navigate(from, { replace: true });
    } catch (error: any) {
      // Log any login errors
      console.error("Login error:", error);
      
      // Reset CAPTCHA on error
      recaptchaRef.current?.reset();
      
      // You can add error state to show in UI
      // setError(error.message || "Login failed");
    } finally {
      // Stop loading spinner regardless of success or failure
      setLoading(false);
    }
  };

  // Return the loading state, login handler, and CAPTCHA ref
  return { 
    loading, 
    handleLogin, 
    recaptchaRef,
    captchaError,
    RECAPTCHA_SITE_KEY 
  };
};