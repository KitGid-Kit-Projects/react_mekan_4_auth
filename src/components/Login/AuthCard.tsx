// Import React library to define the functional component
import React from "react";

// Import Ant Design components for layout, typography, and buttons
import { Card, Space, Typography, Divider, Button } from "antd";

// Import a user icon for visual appeal
import { UserOutlined } from "@ant-design/icons";

// Import Link from react-router-dom to navigate to signup page
import { Link } from "react-router-dom";

// Import a custom LoginForm component (handles email/password login form)
import LoginForm from "./LoginForm";

// Extract Title and Text from Typography for cleaner usage
const { Title, Text } = Typography;

// Define TypeScript interface for props passed into this component
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function to handle form submission
  loading: boolean; // Boolean to indicate loading state during authentication
}

// Define functional React component named AuthCard
const AuthCard: React.FC<Props> = ({ onSubmit, loading }) => (
  // Main card container for the login UI
  <Card
    style={{
      width: "100%", // Card takes full width of its parent
      maxWidth: 400, // Limit maximum width for a compact form
      borderRadius: "12px", // Rounded corners for a modern look
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    }}
  >
    {/* Use Space to organize child elements vertically with spacing */}
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Header Section with icon and welcome message */}
      <div style={{ textAlign: "center" }}>
        {/* User icon for visual branding */}
        <UserOutlined
          style={{
            fontSize: "48px",
            color: "#667eea",
            marginBottom: "16px",
          }}
        />

        {/* Main title for the authentication card */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome Back
        </Title>

        {/* Subtitle below the title */}
        <Text type="secondary">Sign in to your account</Text>
      </div>

      {/* --- LOGIN FORM SECTION --- */}
      {/* The LoginForm component handles user input and submission */}
      <LoginForm onSubmit={onSubmit} loading={loading} />

      {/* --- DIVIDER SECTION --- */}
      {/* Divider separates the login form from the signup link */}
      <Divider style={{ margin: "8px 0" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          Don't have an account?
        </Text>
      </Divider>

      {/* --- SIGNUP LINK SECTION --- */}
      {/* Link navigates to the signup page */}
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button
          type="text" // Text button for a minimalistic look
          style={{
            width: "100%", // Full-width button
            height: "48px", // Taller for easy tapping
            borderRadius: "8px", // Rounded edges
            color: "#667eea", // Match brand color
            fontWeight: "500", // Medium weight for readability
          }}
        >
          Create New Account
        </Button>
      </Link>
    </Space>
  </Card>
);

// Export component so it can be used in login or authentication pages
export default AuthCard;
