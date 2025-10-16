// Import React library for building components
import React from 'react'

// Import Ant Design components for UI layout and design
import { Card, Typography, Space } from 'antd'

// Import a user icon to represent account creation
import { UserAddOutlined } from '@ant-design/icons'

// Import the SignUpForm component that handles user registration form logic
import SignUpForm from '@/components/SignUp/SignUpForm'

// Destructure Typography components for easier access
const { Title, Text } = Typography

// Define the SignUp page component
const SignUp: React.FC = () => {
  return (
    // Full-page container with gradient background and centered content
    <div
      style={{
        minHeight: '100vh', // Full viewport height
        display: 'flex', // Enable flexbox layout
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background (blue-purple)
        padding: '20px', // Adds padding for smaller screens
      }}
    >
      {/* Ant Design Card serves as the main container for the sign-up content */}
      <Card
        style={{
          width: '100%', // Takes full width on small screens
          maxWidth: 400, // Limits width for better readability
          borderRadius: '12px', // Smooth rounded corners
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // Subtle shadow for depth
        }}
      >
        {/* Space component creates consistent vertical spacing between elements */}
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header section (icon, title, and subtitle) */}
          <div style={{ textAlign: 'center' }}>
            {/* User icon at the top for a friendly visual */}
            <UserAddOutlined
              style={{
                fontSize: '48px', // Large icon size
                color: '#667eea', // Blue accent color
                marginBottom: '16px', // Space below icon
              }}
            />

            {/* Main heading */}
            <Title level={2} style={{ margin: 0, color: '#262626' }}>
              Create Account
            </Title>

            {/* Subtext prompting user to sign up */}
            <Text type="secondary">Sign up to get started</Text>
          </div>

          {/* 👇 The actual sign-up form is separated into its own component for modularity */}
          <SignUpForm />
        </Space>
      </Card>
    </div>
  )
}

// Export the component so it can be used in routing (e.g., /signup)
export default SignUp
