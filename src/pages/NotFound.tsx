// Import React and the useEffect hook
import React, { useEffect } from "react"

// Import React Router tools for navigation and current route info
import { useLocation, Link } from "react-router-dom"

// Import Ant Design components for the UI layout and styling
import { Result, Button } from "antd"

// Import an icon for the “Back Home” button
import { HomeOutlined } from "@ant-design/icons"

// Define the NotFound page component
const NotFound: React.FC = () => {
  // Get the current location (URL path)
  const location = useLocation()

  // useEffect hook runs when this component mounts or when the path changes
  useEffect(() => {
    // Log a message to the console to help identify broken links or routes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    )
  }, [location.pathname]) // Re-run if the path changes

  // Return the page layout
  return (
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Enable flexbox layout
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Soft gradient background
      }}
    >
      {/* Ant Design Result component provides a nice pre-styled 404 layout */}
      <Result
        status="404" // Displays the “404” status
        title="404" // Large heading text
        subTitle="Sorry, the page you visited does not exist." // Subtitle message
        extra={
          // The “Back Home” button wrapped in a Link for navigation
          <Link to="/">
            <Button
              type="primary" // Primary Ant Design button style
              icon={<HomeOutlined />} // Add a home icon before the text
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient theme color
                border: "none", // Remove default border
                borderRadius: "8px", // Rounded corners for modern look
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

// Export the NotFound component for use in routing (e.g., path="*")
export default NotFound
