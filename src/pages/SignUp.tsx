// Import React for component creation
import React from 'react';

// Import Ant Design components for layout and typography
import { Card, Typography, Space } from 'antd';

// Import an icon for visual emphasis (user with plus symbol)
import { UserAddOutlined } from '@ant-design/icons';

// Import the SignUpForm component (contains the actual form logic)
import SignUpForm from '@/components/SignUp/SignUpForm';

// Destructure Ant Design Typography components for convenience
const { Title, Text } = Typography;

// --------------------------------------------
// 🔹 SignUp Page Component
// --------------------------------------------
// Displays a card centered on a gradient background with a sign-up form inside.
const SignUp: React.FC = () => {
  return (
    // Outer container with full-screen gradient background and centered content
    <div
      style={{
        minHeight: '100vh', // Take full screen height
        display: 'flex', // Enable flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple-blue gradient
        padding: '20px', // Padding for small screens
      }}
    >
      {/* Main card container for signup form */}
      <Card
        style={{
          width: '100%', // Allow responsiveness
          maxWidth: 400, // Limit width for better readability
          borderRadius: '12px', // Rounded corners
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // Soft shadow for depth
        }}
      >
        {/* Space from Ant Design adds vertical spacing between elements */}
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          
          {/* Header section with icon, title, and subtitle */}
          <div style={{ textAlign: 'center' }}>
            {/* User icon (represents account creation) */}
            <UserAddOutlined
              style={{
                fontSize: '48px', // Large icon size
                color: '#667eea', // Themed color
                marginBottom: '16px', // Space below icon
              }}
            />

            {/* Main heading for the sign-up card */}
            <Title level={2} style={{ margin: 0, color: '#262626' }}>
              Create Account
            </Title>

            {/* Subheading text */}
            <Text type="secondary">Sign up to get started</Text>
          </div>

          {/* 👇 The actual signup form component */}
          <SignUpForm />
        </Space>
      </Card>
    </div>
  );
};

// Export component as default for routing or direct use
export default SignUp;
