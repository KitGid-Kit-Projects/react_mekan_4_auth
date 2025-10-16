// Import React core library
import React from 'react'

// Import Ant Design UI components for layout and styling
import { Card, Typography, Space } from 'antd'

// Import an icon to visually represent the "Sign Up" page
import { UserAddOutlined } from '@ant-design/icons'

// Import the SignUpForm component that contains the actual registration form
import SignUpForm from '@/components/SignUp/SignUpForm'

// Destructure Typography components for convenience
const { Title, Text } = Typography

// Define the SignUp page component
const SignUp: React.FC = () => {
  return (
    // Outer container for the entire page layout
    <div
      style={{
        minHeight: '100vh', // Makes the container take up the full viewport height
        display: 'flex', // Enables flexbox layout
        justifyContent: 'center', // Centers the card horizontally
        alignItems: 'center', // Centers the card vertically
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Beautiful gradient background
        padding: '20px', // Adds padding for small screens
      }}
    >
      {/* Ant Design Card component used as the main container for the signup form */}
      <Card
        style={{
          width: '100%', // Takes up full width of container
          maxWidth: 400, // Restricts max width for good readability
          borderRadius: '12px', // Rounded corners for modern look
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // Soft shadow for depth
        }}
      >
        {/* Space component vertically stacks all children with spacing between them */}
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header section containing icon and title */}
          <div style={{ textAlign: 'center' }}>
            {/* User add icon for visual indication */}
            <UserAddOutlined
              style={{
                fontSize: '48px', // Large icon size
                color: '#667eea', // Blue-purple accent color
                marginBottom: '16px', // Spacing below icon
              }}
            />

            {/* Main title of the signup page */}
            <Title level={2} style={{ margin: 0, color: '#262626' }}>
              Create Account
            </Title>

            {/* Subtitle text for context */}
            <Text type="secondary">Sign up to get started</Text>
          </div>

          {/* 👇 The signup form is separated into its own component for clarity and reuse */}
          <SignUpForm />
        </Space>
      </Card>
    </div>
  )
}

// Export the component so it can be used as a route page (e.g., /signup)
export default SignUp
