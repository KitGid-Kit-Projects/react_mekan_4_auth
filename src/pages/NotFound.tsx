// Import React and the useEffect hook
import React, { useEffect } from "react"

// Import React Router utilities for navigation and route information
import { useLocation, Link } from "react-router-dom"

// Import Ant Design UI components for layout and styling
import { Result, Button } from "antd"

// Import a home icon for the "Back Home" button
import { HomeOutlined } from "@ant-design/icons"

// Define the NotFound component (renders when no route matches)
const NotFound: React.FC = () => {
  // useLocation gives access to the current URL path
  const location = useLocation()

  // useEffect logs an error message whenever the user visits a non-existent route
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    )
  }, [location.pathname]) // Runs again if the route changes

  // Return the 404 error page layout
  return (
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Enables flexbox
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Soft gradient background
      }}
    >
      {/* Ant Design Result component for pre-styled feedback screens */}
      <Result
        status="404" // Shows a "404" status
        title="404" // Large 404 title text
        subTitle="Sorry, the page you visited does not exist." // Message below title
        extra={
          // "Back Home" button inside a Link to navigate to the homepage
          <Link to="/">
            <Button
              type="primary" // Primary style button
              icon={<HomeOutlined />} // Home icon on the left side
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient button color
                border: "none", // Remove default border
                borderRadius: "8px", // Rounded corners
                height: "40px", // Button height
                fontWeight: "500", // Medium font weight
              }}
            >
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  )
}

// Export the component for routing usage
export default NotFound
