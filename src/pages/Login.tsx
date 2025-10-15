// Import the AuthCard component — contains the login form UI
import AuthCard from "@/components/Login/AuthCard";

// Import the custom useLogin hook — handles authentication and navigation logic
import { useLogin } from "@/hooks/Login/useLogin";

// Import React for component creation
import React from "react";

// Define the Login page as a React functional component
const Login: React.FC = () => {
  // Extract loading state and login handler from the custom useLogin hook
  const { loading, handleLogin } = useLogin();

  // Return JSX structure for the login page
  return (
    // Outer container — full-screen background with centered login card
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Enable flex layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
        padding: "20px", // Space inside for small screens
      }}
    >
      {/* AuthCard component displays the actual login form */}
      <AuthCard onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

// Export the component as default so it can be used as a route (e.g. /login)
export default Login;
