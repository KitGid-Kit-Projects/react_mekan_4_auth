// Import React utilities for context, state, and component creation
import React, { createContext, useContext, useState } from 'react'

// Import Firebase authentication types and methods
import {
  User, // Represents the Firebase user object
  signInWithEmailAndPassword, // Firebase method to sign in users
  UserCredential, // Represents the result of a sign-in attempt
} from 'firebase/auth'

// Import the configured Firebase auth instance
import { auth } from '../firebase/config'

// Import Ant Design message API for showing success/error notifications
import { message } from 'antd'

// ============================
// Define the context interface
// ============================

// Describes the shape of the authentication context
interface AuthContextType {
  currentUser: User | null // Currently logged-in Firebase user
  loading: boolean // Whether authentication state is being checked
  signIn: (email: string, password: string) => Promise<UserCredential> // Login function
}

// Create the actual AuthContext with an undefined default
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// ============================
// Custom Hook: useAuth
// ============================

// Provides easy access to authentication context from any component
export const useAuth = () => {
  const context = useContext(AuthContext)

  // Throw error if useAuth is used outside the provider
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

// ============================
// Provider Props Definition
// ============================

// Defines the expected props for the AuthProvider component
interface AuthProviderProps {
  children: React.ReactNode // Any child components wrapped by this provider
}

// ============================
// AuthProvider Component
// ============================

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // State to track the current Firebase user
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // State to track whether the authentication system is initializing/loading
  const [loading, setLoading] = useState(true)

  // ============================
  // Sign-In Function
  // ============================

  // Handles user login with Firebase authentication
  const signIn = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    try {
      // Attempt to sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      // Retrieve and store the user's token and ID in localStorage
      const token = await userCredential.user.getIdToken()
      localStorage.setItem('authToken', token)
      localStorage.setItem('userId', userCredential.user.uid)

      // Show success message on successful sign-in
      message.success('Signed in successfully!')

      // Update state to store the logged-in user
      setCurrentUser(userCredential.user)

      // Set loading to false once authentication is complete
      setLoading(false)

      return userCredential
    } catch (error: any) {
      // Show error message in case of failure
      message.error(error.message || 'Failed to sign in')
      throw error // Re-throw to allow calling components to handle it
    }
  }

  // ============================
  // Context Value
  // ============================

  // Define the values provided to all components using this context
  const value: AuthContextType = {
    currentUser,
    loading,
    signIn,
  }

  // ============================
  // Provider Return
  // ============================

  // Wrap children with the AuthContext provider so all components can access auth values
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
