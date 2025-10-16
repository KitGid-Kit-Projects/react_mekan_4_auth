// Import React for defining components
import React from 'react'

// Import routing tools from React Router for navigation and route setup
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Import Ant Design ConfigProvider for global theme customization
import { ConfigProvider } from 'antd'

// Import authentication context and hook
import { AuthProvider, useAuth } from "./context/AuthContext"

// Import all the page components
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import NotFound from "./pages/NotFound"

// =========================================================
// 🔁 RootRedirect Component
// =========================================================
// Handles redirecting users depending on their authentication state
const RootRedirect: React.FC = () => {
  // Extract user info and loading state from the authentication context
  const { currentUser, loading } = useAuth()

  // Show a loading message while Firebase checks user authentication
  if (loading) {
    return <div>Loading...</div>
  }

  // If the user is authenticated, navigate to the dashboard
  // Otherwise, redirect to the login page
  return currentUser
    ? <Navigate to="/dashboard" replace />
    : <Navigate to="/login" replace />
}

// =========================================================
// 🎨 Main App Component
// =========================================================
const App = () => (
  // ConfigProvider allows customizing the Ant Design theme globally
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#667eea', // Sets your brand’s primary purple-blue color
        borderRadius: 8, // Global border radius for buttons, inputs, etc.
      },
    }}
  >
    {/* Wrap the entire app in the AuthProvider to share authentication context */}
    <AuthProvider>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        <Routes>
          {/* Root route automatically redirects users based on login state */}
          <Route path="/" element={<RootRedirect />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route example — placeholder dashboard */}
          <Route
            path="/dashboard"
            element={
              <>DashBoard</> // Placeholder dashboard — replace with your real component
            }
          />

          {/* Catch-all route for undefined paths (404 page) */}
          {/* Always keep this last so it doesn’t override other routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ConfigProvider>
)

// Export the main app component
export default App