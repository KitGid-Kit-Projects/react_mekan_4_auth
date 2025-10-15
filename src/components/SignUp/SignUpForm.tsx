// Import core React library
import React from 'react';

// Import Ant Design components for form layout, inputs, buttons, text, and dividers
import { Form, Input, Button, Typography, Divider } from 'antd';

// Import icons for form fields
import { LockOutlined, MailOutlined } from '@ant-design/icons';

// Import Link for navigation (React Router)
import { Link } from 'react-router-dom';

// Import a custom hook for handling authentication logic
import { useAuthForm } from '@/hooks/SignUp/useAuthForm';

// Extract Text component from Typography for convenience
const { Text } = Typography;

// Define the functional component for the signup form
const SignUpForm: React.FC = () => {
  // Destructure form instance, loading state, and submission handler from custom hook
  const { form, loading, onFinish } = useAuthForm('signup');

  // Render the form and related UI elements
  return (
    <>
      {/* Signup form container */}
      <Form 
        form={form} // Connect the Ant Design form instance
        name="signup" // Unique form identifier
        onFinish={onFinish} // Trigger when form passes validation and is submitted
        layout="vertical" // Label above each field
        size="large" // Larger form inputs and labels
      >
        {/* Email field */}
        <Form.Item
          name="email" // Field name
          label="Email" // Label text
          rules={[
            { required: true, message: 'Please input your email!' }, // Required rule
            { type: 'email', message: 'Enter valid email!' }, // Must be a valid email
          ]}
        >
          {/* Input with mail icon */}
          <Input 
            prefix={<MailOutlined />} // Icon inside input
            placeholder="Enter your email" // Placeholder text
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Password field */}
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please input your password!' }, // Required rule
            { min: 6, message: 'Min 6 characters!' }, // Minimum length validation
          ]}
        >
          {/* Password input with lock icon */}
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Enter your password" 
            style={{ borderRadius: '8px' }} 
          />
        </Form.Item>

        {/* Confirm Password field */}
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']} // Watches password field for changes
          rules={[
            { required: true, message: 'Please confirm your password!' }, // Required rule
            ({ getFieldValue }) => ({
              // Custom validation to ensure both passwords match
              validator(_, value) {
                if (!value || getFieldValue('password') === value) return Promise.resolve();
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          {/* Password confirmation input */}
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Confirm your password" 
            style={{ borderRadius: '8px' }} 
          />
        </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button 
            type="primary" // Primary Ant Design button
            htmlType="submit" // Submits the form
            loading={loading} // Shows spinner when submitting
            style={{
              width: '100%', // Full width button
              height: '48px', // Taller for better UX
              borderRadius: '8px', // Rounded corners
              background: 'linear-gradient(135deg, #667eea, #764ba2)', // Gradient background
              border: 'none', // Remove default border
              fontSize: '16px', // Larger font
              fontWeight: '500', // Medium bold text
            }}
          >
            {/* Conditional button label */}
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>

      {/* Divider separates the signup form from the login link */}
      <Divider>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          Already have an account?
        </Text>
      </Divider>

      {/* Link to the login page */}
      <Link to="/login">
        <Button 
          type="text" // No background
          style={{
            width: '100%', // Full width
            height: '48px', // Consistent with other buttons
            borderRadius: '8px',
            color: '#667eea', // Blue text
            fontWeight: '500', // Medium bold text
          }}
        >
          Sign In Instead
        </Button>
      </Link>
    </>
  );
};

// Export component for use elsewhere
export default SignUpForm;