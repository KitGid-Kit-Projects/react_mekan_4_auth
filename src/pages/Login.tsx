// Import React to define and render the component
import React from "react";

// Import the AuthCard component (handles UI for the login form)
import AuthCard from "@/components/Login/AuthCard";

// Import the custom useLogin hook for handling authentication logic
import { useLogin } from "@/hooks/Login/useLogin";

// --- MAIN LOGIN COMPONENT ---
const Login: React.FC = () => {
  // Destructure loading state and handleLogin function from the custom hook
  const { loading, handleLogin } = useLogin();

  // --- COMPONENT RENDER ---
  return (
    // Full-page container with centered login card
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Enable flexbox for layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
        padding: "20px", // Padding for small screen spacing
      }}
    >
      {/* Render the AuthCard component and pass in the login handler and loading state */}
      <AuthCard onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

// Export the component for routing or direct use
export default Login;
