// Importing necessary libraries and components
import React from "react"; // React core library for building components
import { Card, Space, Typography, Divider, Button } from "antd"; // UI components from Ant Design
import { UserOutlined } from "@ant-design/icons"; // User icon from Ant Design icons
import { Link } from "react-router-dom"; // For navigation between routes without reloading
import LoginForm from "./LoginForm"; // Custom LoginForm component for handling input fields and submission

// Destructure Title and Text from Typography for easier use
const { Title, Text } = Typography;

// Define the Props interface for TypeScript type checking
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function to handle form submission
  loading: boolean; // Boolean to indicate loading state
}

// Functional component definition using React.FC with Props
const AuthCard: React.FC<Props> = ({ onSubmit, loading }) => (
  // Ant Design Card component acts as a container for the login form
  <Card
    style={{
      width: "100%", // Full width of parent container
      maxWidth: 400, // Limit width to 400px for good design balance
      borderRadius: "12px", // Rounded corners
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth effect
    }}
  >
    {/* Space component adds consistent vertical spacing between child elements */}
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Header section with icon and text, centered */}
      <div style={{ textAlign: "center" }}>
        {/* User icon for a visual login cue */}
        <UserOutlined
          style={{ fontSize: "48px", color: "#667eea", marginBottom: "16px" }}
        />
        {/* Main title welcoming the user */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome Back
        </Title>
        {/* Subtitle prompting the user to sign in */}
        <Text type="secondary">Sign in to your account</Text>
      </div>

      {/* LoginForm component handles email/password input and submit logic */}
      <LoginForm onSubmit={onSubmit} loading={loading} />

      {/* Divider separating the login form from the signup link */}
      <Divider style={{ margin: "8px 0" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          Don't have an account?
        </Text>
      </Divider>

      {/* Signup button that navigates to the signup page */}
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button
          type="text"
          style={{
            width: "100%", // Full width button
            height: "48px", // Taller button for easier interaction
            borderRadius: "8px", // Slightly rounded corners
            color: "#667eea", // Purple-blue color matching theme
            fontWeight: "500", // Medium font weight
          }}
        >
          Create New Account
        </Button>
      </Link>
    </Space>
  </Card>
);

// Export the component so it can be used elsewhere
export default AuthCard;
