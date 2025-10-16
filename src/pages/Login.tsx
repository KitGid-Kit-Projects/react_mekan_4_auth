// Import the AuthCard component that contains the login form and layout
import AuthCard from "@/components/Login/AuthCard"

// Import the custom useLogin hook that handles Firebase login logic
import { useLogin } from "@/hooks/Login/useLogin"

// Import React library to define the component
import React from "react"

// Define the Login page component
const Login: React.FC = () => {
  // Destructure loading state and login handler from useLogin hook
  const { loading, handleLogin } = useLogin()

  // Return the page layout and content
  return (
    // Outer container with gradient background and centered content
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Enable Flexbox layout
        justifyContent: "center", // Horizontally center content
        alignItems: "center", // Vertically center content
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Purple-blue gradient background
        padding: "20px", // Adds space around for smaller screens
      }}
    >
      {/* Render the AuthCard component (the actual login box) */}
      <AuthCard onSubmit={handleLogin} loading={loading} />
      {/*
        onSubmit → Function triggered when the login form is submitted
        loading → Controls spinner state on the login button
      */}
    </div>
  )
}

// Export the component for use in routing (e.g., /login)
export default Login
