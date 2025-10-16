// Import React to define the component
import React from "react"

// Import Ant Design components for layout and UI styling
import { Card, Space, Typography, Divider, Button } from "antd"

// Import a user icon from Ant Design’s icon library
import { UserOutlined } from "@ant-design/icons"

// Import the Link component for client-side navigation between routes
import { Link } from "react-router-dom"

// Import the LoginForm component that handles form inputs and submission
import LoginForm from "./LoginForm"

// Destructure Typography subcomponents for easy access
const { Title, Text } = Typography

// Define the props expected by this component
interface Props {
  onSubmit: (values: { email: string; password: string }) => void // Function triggered on login form submission
  loading: boolean // Boolean indicating whether the form is submitting
}

// Functional component definition with destructured props
const AuthCard: React.FC<Props> = ({ onSubmit, loading }) => (
  // Card acts as the main container for the login UI
  <Card
    style={{
      width: "100%", // Takes full available width on smaller screens
      maxWidth: 400, // Restricts maximum width for readability
      borderRadius: "12px", // Rounded corners for a modern look
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft drop shadow for depth
    }}
  >
    {/* Space component adds vertical spacing between all inner elements */}
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      
      {/* Header section: includes the icon and title */}
      <div style={{ textAlign: "center" }}>
        {/* User icon at the top for visual identity */}
        <UserOutlined
          style={{
            fontSize: "48px", // Large icon size
            color: "#667eea", // Purple-blue accent color
            marginBottom: "16px", // Space below icon
          }}
        />
        {/* Main heading welcoming the user */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome Back
        </Title>
        {/* Subheading prompting the user to sign in */}
        <Text type="secondary">Sign in to your account</Text>
      </div>

      {/* Login form section that handles user input and submission */}
      <LoginForm onSubmit={onSubmit} loading={loading} />
      {/*
        - onSubmit: triggers parent login handler
        - loading: shows spinner and disables the form while submitting
      */}

      {/* Divider visually separates login section from the sign-up section */}
      <Divider style={{ margin: "8px 0" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          Don't have an account?
        </Text>
      </Divider>

      {/* Link wrapping a styled button that navigates to the signup page */}
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button
          type="text" // Renders as a text-style button
          style={{
            width: "100%", // Full width for consistency
            height: "48px", // Slightly larger button for accessibility
            borderRadius: "8px", // Rounded corners for a soft look
            color: "#667eea", // Purple-blue text color
            fontWeight: "500", // Medium weight for readability
          }}
        >
          Create New Account
        </Button>
      </Link>
    </Space>
  </Card>
)

// Export the component for use in other parts of the app (e.g., Login page)
export default AuthCard
