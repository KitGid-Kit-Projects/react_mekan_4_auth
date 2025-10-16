// Import React and hooks for component creation and lifecycle management
import React, { useEffect } from "react";

// Import React Router utilities for route handling and navigation
import { useLocation, Link } from "react-router-dom";

// Import Ant Design UI components for layout and styling
import { Result, Button } from "antd";

// Import an icon for the "Back Home" button
import { HomeOutlined } from "@ant-design/icons";

// --- MAIN 404 PAGE COMPONENT ---
const NotFound: React.FC = () => {
  // Access the current location to know which URL the user tried to visit
  const location = useLocation();

  // --- SIDE EFFECT: LOG 404 ERRORS ---
  useEffect(() => {
    // Log a warning or send to analytics when a user visits an invalid route
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Re-run if the pathname changes

  // --- COMPONENT RENDER ---
  return (
    // Full-screen container with centered 404 message
    <div
      style={{
        minHeight: "100vh", // Fill entire viewport height
        display: "flex", // Enable flexbox layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Subtle gradient background
      }}
    >
      {/* Ant Design Result component provides a ready-made error layout */}
      <Result
        status="404" // Display 404-style layout
        title="404" // Main title text
        subTitle="Sorry, the page you visited does not exist." // Subtitle message

        // --- ACTION BUTTON SECTION ---
        extra={
          <Link to="/">
            {/* Button that redirects users back to the homepage */}
            <Button
              type="primary"
              icon={<HomeOutlined />} // Home icon on button
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
                border: "none", // Remove default border
                borderRadius: "8px", // Rounded corners
                height: "40px", // Consistent button height
                fontWeight: "500", // Medium-weight font for better readability
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

// Export the component for use in route handling
export default NotFound;
