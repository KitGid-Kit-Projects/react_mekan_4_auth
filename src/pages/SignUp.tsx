import React from 'react'; // Import React core library
import { Card, Typography, Space } from 'antd'; // Import Ant Design UI components
import { UserAddOutlined } from '@ant-design/icons'; // Import user-add icon for header
import SignUpForm from '@/components/SignUp/SignUpForm'; // Import custom sign-up form component

const { Title, Text } = Typography; // Destructure Typography components for text and title

const SignUp: React.FC = () => { // Define SignUp page as a functional component
  return (
    <div style={{ // Outer wrapper div styling
      minHeight: '100vh', // Full viewport height
      display: 'flex', // Enable flexbox layout
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background matching theme
      padding: '20px' // Padding for mobile responsiveness
    }}>
      <Card // Ant Design Card component for white background form container
        style={{ 
          width: '100%', // Full width up to max limit
          maxWidth: 400, // Restrict width for better readability
          borderRadius: '12px', // Rounded corners
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)' // Soft drop shadow
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}> {/* Vertical spacing for inner elements */}
          <div style={{ textAlign: 'center' }}> {/* Center align header section */}
            <UserAddOutlined style={{ fontSize: '48px', color: '#667eea', marginBottom: '16px' }} /> {/* Big user-add icon */}
            <Title level={2} style={{ margin: 0, color: '#262626' }}>Create Account</Title> {/* Main title */}
            <Text type="secondary">Sign up to get started</Text> {/* Subtitle text */}
          </div>

          {/* Sign-up form is imported as a separate component for cleaner structure */}
          <SignUpForm /> {/* Custom reusable form component */}
        </Space>
      </Card>
    </div>
  );
};

export default SignUp; // Export SignUp page as default
