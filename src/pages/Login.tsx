// Import the AuthCard component (the styled login card UI)
import AuthCard from "@/components/Login/AuthCard"

// Import the custom hook that handles login logic (state + submission)
import { useLogin } from "@/hooks/Login/useLogin"

// Import React for JSX and functional components
import React from "react"

// Define the Login page component
const Login: React.FC = () => {
  // Destructure loading state and login handler function from the useLogin hook
  const { loading, handleLogin } = useLogin()

  // Return the login page layout
  return (
    // Full-screen container with centered AuthCard
    <div
      style={{
        minHeight: "100vh", // Makes the container take up the full viewport height
        display: "flex", // Enables flexbox layout
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Beautiful gradient background
        padding: "20px", // Adds spacing around content for small screens
      }}
    >
      {/* Render the AuthCard component and pass down required props */}
      <AuthCard onSubmit={handleLogin} loading={loading} />
      {/*
        - onSubmit → triggers handleLogin when the form is submitted
        - loading → shows a loading spinner while login is processing
      */}
    </div>
  )
}

// Export the component so it can be used as the /login page
export default Login
