// Import core React library
import React from "react";

// Import UI components from Ant Design
import { Card, Space, Typography, Divider, Button } from "antd";

// Import user icon from Ant Design Icons
import { UserOutlined } from "@ant-design/icons";

// Import Link for navigation between pages (React Router)
import { Link } from "react-router-dom";

// Import the custom LoginForm component
import LoginForm from "./LoginForm";

// Destructure typography components for easier use
const { Title, Text } = Typography;

// Define TypeScript interface for component props
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function to handle login form submission
  loading: boolean; // Indicates whether login is in progress
}

// Define functional component
const AuthCard: React.FC<Props> = ({ onSubmit, loading }) => (
  // Card component acts as the container for the login form
  <Card
    style={{
      width: "100%", // Full width of parent container
      maxWidth: 400, // Limit maximum width to 400px for nice proportion
      borderRadius: "12px", // Rounded corners for a smooth look
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for elevation
    }}
  >
    {/* Space component arranges child elements vertically with spacing */}
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      
      {/* Top section: user icon and title */}
      <div style={{ textAlign: "center" }}>
        {/* User icon at the top */}
        <UserOutlined
          style={{ fontSize: "48px", color: "#667eea", marginBottom: "16px" }}
        />
        {/* Title welcoming the user */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome Back
        </Title>
        {/* Subtitle prompting user to sign in */}
        <Text type="secondary">Sign in to your account</Text>
      </div>

      {/* Login form component (handles email/password submission) */}
      <LoginForm onSubmit={onSubmit} loading={loading} />

      {/* Divider with text prompting signup for new users */}
      <Divider style={{ margin: "8px 0" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          Don't have an account?
        </Text>
      </Divider>

      {/* Link to the signup page */}
      <Link to="/signup" style={{ textDecoration: "none" }}>
        {/* Button for creating a new account */}
        <Button
          type="text" // Text-only style (no solid background)
          style={{
            width: "100%", // Full width for consistency
            height: "48px", // Taller button for better tap area
            borderRadius: "8px", // Slightly rounded edges
            color: "#667eea", // Blue text color
            fontWeight: "500", // Medium boldness for better readability
          }}
        >
          Create New Account
        </Button>
      </Link>
    </Space>
  </Card>
);

// Export the component so it can be imported elsewhere
export default AuthCard;