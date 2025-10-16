// Import React's state hook for managing loading state
import { useState } from 'react'

// Import router hooks for navigation and reading route state
import { useNavigate, useLocation } from 'react-router-dom'

// Import Ant Design's Form API for managing form instances and validation
import { Form } from 'antd'

// Import authentication context to access sign-in functionality
import { useAuth } from '@/context/AuthContext'

// =======================================
// Define types for form and hook behavior
// =======================================

// Expected values from authentication forms
interface AuthFormValues {
  email: string // User email input
  password: string // User password input
  confirmPassword?: string // Optional confirm password (only for signup)
}

// Available modes for the hook — determines form behavior
type Mode = 'login' | 'signup'

// =======================================
// Custom Hook Definition
// =======================================

export const useAuthForm = (mode: Mode) => {
  // Create an Ant Design form instance
  const [form] = Form.useForm()

  // State to manage form submission loading indicator
  const [loading, setLoading] = useState(false)

  // Extract signIn function from authentication context
  const { signIn } = useAuth()

  // Router hooks for navigation and route state tracking
  const navigate = useNavigate()
  const location = useLocation()

  // Determine where to redirect after successful authentication
  // If redirected from a protected route, return to that route; otherwise, go to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard'

  // =======================================
  // Form Submit Handler
  // =======================================

  const onFinish = async (values: AuthFormValues) => {
    // Start loading spinner
    setLoading(true)

    try {
      // If the form mode is "login"
      if (mode === 'login') {
        // Attempt to sign in using Firebase authentication
        await signIn(values.email, values.password)

        // Redirect user to the previous or dashboard page
        navigate(from, { replace: true })
      } else {
        // TODO: Add Firebase sign-up logic here later (e.g., createUserWithEmailAndPassword)
        // For now, just navigate to dashboard after signup simulation
        navigate('/dashboard')
      }
    } catch (error) {
      // Log any errors that occur during sign-in or sign-up
      console.error(`${mode} error:`, error)
    } finally {
      // Stop loading spinner after process completes
      setLoading(false)
    }
  }

  // =======================================
  // Return Values
  // =======================================

  // Return all useful items to be used in the SignUpForm or LoginForm components
  return { form, loading, onFinish }
}
