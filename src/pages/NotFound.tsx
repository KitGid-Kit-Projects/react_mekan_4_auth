import React, { useEffect } from "react"; // Import React and useEffect hook
import { useLocation, Link } from "react-router-dom"; // Import hooks and components for routing
import { Result, Button } from "antd"; // Import Ant Design components for layout and styling
import { HomeOutlined } from "@ant-design/icons"; // Import home icon for button

const NotFound: React.FC = () => { // Define NotFound component
  const location = useLocation(); // Access current URL location

  useEffect(() => { // Log when user visits a non-existent route
    console.error(
      "404 Error: User attempted to access non-existent route:", // Log message
      location.pathname // Display the missing route path
    );
  }, [location.pathname]); // Re-run effect when pathname changes

  return ( // Render 404 page layout
    <div style={{ // Outer container styling
      minHeight: '100vh', // Full viewport height
      display: 'flex', // Enable flex layout
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' // Subtle gradient background
    }}>
      <Result // Ant Design's Result component for status pages
        status="404" // Set status type
        title="404" // Main title text
        subTitle="Sorry, the page you visited does not exist." // Subtitle message
        extra={ // Extra content (button)
          <Link to="/"> {/* Link back to homepage */}
            <Button 
              type="primary" // Primary button style
              icon={<HomeOutlined />} // Home icon on the button
              style={{ // Custom button styling
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background
                border: 'none', // Remove default border
                borderRadius: '8px', // Rounded corners
                height: '40px', // Button height
                fontWeight: '500' // Medium bold text
              }}
            >
              Back Home {/* Button label */}
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound; // Export NotFound component as default
