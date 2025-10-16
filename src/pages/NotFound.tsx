// Import React and hooks
import React, { useEffect } from "react";

// Import router utilities to detect current route and navigate
import { useLocation, Link } from "react-router-dom";

// Import Ant Design components for clean layout and UI
import { Result, Button } from "antd";

// Import Ant Design icon for the home button
import { HomeOutlined } from "@ant-design/icons";

// --------------------------------------------
// 🔹 NotFound Component (404 Page)
// --------------------------------------------
// This page is displayed when a user visits a route that doesn't exist.
const NotFound: React.FC = () => {
  // Access the current location (URL path) using React Router
  const location = useLocation();

  // useEffect runs when component mounts or when the path changes
  useEffect(() => {
    // Log the missing route to the console (useful for debugging)
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Re-run effect if the path changes

  // --------------------------------------------
  // 🔹 UI Rendering
  // --------------------------------------------
  return (
    // Outer container — full screen, centered content, and gradient background
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex", // Flexbox layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Soft gradient background
      }}
    >
      {/* Ant Design Result component — provides pre-styled status messages */}
      <Result
        status="404" // Displays the 404 status style
        title="404" // Large title text
        subTitle="Sorry, the page you visited does not exist." // Subtitle text

        // Extra section — includes a link back to the homepage
        extra={
          <Link to="/">
            <Button
              type="primary" // Primary style button
              icon={<HomeOutlined />} // Home icon on the button
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Match your brand gradient
                border: "none", // Remove default border
                borderRadius: "8px", // Rounded corners
                height: "40px", // Consistent height
                fontWeight: "500", // Slightly bold text
              }}
            >
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

// Export the NotFound component so it can be used in your Router setup
export default NotFound;
