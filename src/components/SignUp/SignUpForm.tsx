// Import core React library
import React from 'react';

// Import Ant Design components for form, input fields, buttons, text, and dividers
import { Form, Input, Button, Typography, Divider } from 'antd';

// Import icons for email and password fields
import { LockOutlined, MailOutlined } from '@ant-design/icons';

// Import Link from react-router-dom for navigation between routes
import { Link } from 'react-router-dom';

// Import custom authentication form hook (handles logic for signup)
import { useAuthForm } from '@/hooks/SignUp/useAuthForm';

// Destructure Text component from Typography for cleaner usage
const { Text } = Typography;

// Define the SignUpForm functional component
const SignUpForm: React.FC = () => {
  // Use custom hook to get Ant Design form instance, loading state, and submit handler
  const { form, loading, onFinish } = useAuthForm('signup');

  // Return form UI
  return (
    <>
      {/* Ant Design form for user registration */}
      <Form 
        form={form} // Connect form instance to AntD form
        name="signup" // Name for identifying form
        onFinish={onFinish} // Handle form submission on success
        layout="vertical" // Arrange form items vertically
        size="large" // Use larger form elements
      >
        {/* Email input field */}
        <Form.Item
          name="email" // Field name for email
          label="Email" // Label displayed above the input
          rules={[
            { required: true, message: 'Please input your email!' }, // Required field rule
            { type: 'email', message: 'Enter valid email!' }, // Email validation rule
          ]}
        >
          <Input
            prefix={<MailOutlined />} // Add mail icon before input
            placeholder="Enter your email" // Placeholder text
            style={{ borderRadius: '8px' }} // Rounded input corners
          />
        </Form.Item>

        {/* Password input field */}
        <Form.Item
          name="password" // Field name for password
          label="Password" // Label displayed above input
          rules={[
            { required: true, message: 'Please input your password!' }, // Required rule
            { min: 6, message: 'Min 6 characters!' }, // Minimum length rule
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />} // Add lock icon before input
            placeholder="Enter your password" // Placeholder text
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Confirm password field */}
        <Form.Item
          name="confirmPassword" // Field name for confirm password
          label="Confirm Password" // Label above input
          dependencies={['password']} // Revalidate when password changes
          rules={[
            { required: true, message: 'Please confirm your password!' }, // Required rule
            // Custom validation to ensure passwords match
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) return Promise.resolve();
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />} // Lock icon prefix
            placeholder="Confirm your password" // Placeholder text
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button 
            type="primary" // Use Ant Design's primary color
            htmlType="submit" // Submit form when clicked
            loading={loading} // Show loading spinner when true
            style={{
              width: '100%', // Full width button
              height: '48px', // Fixed height
              borderRadius: '8px', // Rounded corners
              background: 'linear-gradient(135deg, #667eea, #764ba2)', // Gradient background
              border: 'none', // No border
              fontSize: '16px', // Slightly larger text
              fontWeight: '500', // Medium font weight
            }}
          >
            {/* Change button text when loading */}
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>

      {/* Divider separating form from navigation section */}
      <Divider>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          Already have an account?
        </Text>
      </Divider>

      {/* Link to login page */}
      <Link to="/login">
        <Button 
          type="text" // Text-only button
          style={{
            width: '100%', // Full width
            height: '48px', // Same height as submit button
            borderRadius: '8px', // Rounded corners
            color: '#667eea', // Primary color text
            fontWeight: '500', // Medium font weight
          }}
        >
          Sign In Instead
        </Button>
      </Link>
    </>
  );
};

// Export the SignUpForm component for use in other parts of the app
export default SignUpForm;
