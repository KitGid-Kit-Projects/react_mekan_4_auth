// Import custom authentication hook to access Firebase sign-in logic
import { useAuth } from "@/context/AuthContext"

// Import React’s useState hook for managing component state
import { useState } from "react"

// Import router hooks for navigation and accessing the current route
import { useNavigate, useLocation } from "react-router-dom"

// Define the shape of login form values
interface LoginFormValues {
  email: string // User's email
  password: string // User's password
}

// Custom hook to handle login logic and navigation
export const useLogin = () => {
  // State to manage loading status during login
  const [loading, setLoading] = useState(false)

  // Access signIn method from AuthContext (handles Firebase authentication)
  const { signIn } = useAuth()

  // React Router hooks for navigation and location tracking
  const navigate = useNavigate() // Used to redirect user after login
  const location = useLocation() // Used to determine redirect target

  // Determine redirect target:
  // If redirected from a protected route, go there; otherwise, go to /dashboard
  const from = location.state?.from?.pathname || "/dashboard"

  // Main function that handles form submission and login
  const handleLogin = async (values: LoginFormValues) => {
    // Start loading spinner
    setLoading(true)
    try {
      // Attempt to sign in with Firebase using email and password
      await signIn(values.email, values.password)

      // On successful login, navigate to the target route
      navigate(from, { replace: true })
    } catch (error) {
      // Log errors to the console for debugging
      console.error("Login error:", error)
    } finally {
      // Always stop loading spinner, whether login succeeded or failed
      setLoading(false)
    }
  }

  // Return the hook’s state and login handler to be used in components
  return { loading, handleLogin }
}
