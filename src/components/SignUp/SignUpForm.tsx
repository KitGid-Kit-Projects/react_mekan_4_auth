// Import the React core library
import React from 'react';

// Import Ant Design UI components for form handling and layout
import { Form, Input, Button, Typography, Divider } from 'antd';

// Import icons for email and password fields from Ant Design
import { LockOutlined, MailOutlined } from '@ant-design/icons';

// Import Link for navigation between routes (e.g., to login page)
import { Link } from 'react-router-dom';

// Import custom signup hook for handling form logic (validation, submit, loading state)
import { useAuthForm } from '@/hooks/SignUp/useAuthForm';

// Destructure Text from Typography for easy use
const { Text } = Typography;

// Define the SignUpForm component
const SignUpForm: React.FC = () => {
  // Destructure values returned by the custom hook:
  // form - Ant Design form instance
  // loading - boolean indicating if submission is in progress
  // onFinish - function triggered when form validation passes
  const { form, loading, onFinish } = useAuthForm('signup');

  // Return the full signup form structure
  return (
    <>
      {/* Signup form container */}
      <Form 
        form={form} // Connects the form instance
        name="signup" // Unique name for this form
        onFinish={onFinish} // Function triggered when form is submitted successfully
        layout="vertical" // Vertical layout places labels above fields
        size="large" // Larger input size for better usability
      >

        {/* Email input field */}
        <Form.Item
          name="email" // Field name used in form data
          label="Email" // Label displayed above the input field
          rules={[ // Validation rules for email
            { required: true, message: 'Please input your email!' }, // Required field validation
            { type: 'email', message: 'Enter valid email!' }, // Email format validation
          ]}
        >
          {/* Input field with email icon and placeholder */}
          <Input 
            prefix={<MailOutlined />} // Icon before the input
            placeholder="Enter your email" // Hint text inside input
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Password input field */}
        <Form.Item
          name="password" // Field name for password
          label="Password" // Label displayed above field
          rules={[ // Validation rules for password
            { required: true, message: 'Please input your password!' }, // Required validation
            { min: 6, message: 'Min 6 characters!' }, // Minimum length validation
          ]}
        >
          {/* Password input field with lock icon */}
          <Input.Password 
            prefix={<LockOutlined />} // Icon before input
            placeholder="Enter your password" // Hint text
            style={{ borderRadius: '8px' }} // Rounded edges
          />
        </Form.Item>

        {/* Confirm password field to verify both passwords match */}
        <Form.Item
          name="confirmPassword" // Field name for confirmation
          label="Confirm Password" // Label displayed above input
          dependencies={['password']} // Re-validates when password changes
          rules={[ // Validation rules
            { required: true, message: 'Please confirm your password!' }, // Required validation
            ({ getFieldValue }) => ({ // Custom validation to match passwords
              validator(_, value) {
                if (!value || getFieldValue('password') === value) 
                  return Promise.resolve(); // Validation passes
                return Promise.reject(new Error('The two passwords do not match!')); // Validation fails
              },
            }),
          ]}
        >
          {/* Confirm password input */}
          <Input.Password 
            prefix={<LockOutlined />} // Lock icon before text
            placeholder="Confirm your password" // Hint text
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button 
            type="primary" // Primary Ant Design button
            htmlType="submit" // Submits the form when clicked
            loading={loading} // Displays loading spinner when true
            style={{
              width: '100%', // Full width button
              height: '48px', // Taller button for better UX
              borderRadius: '8px', // Rounded corners
              background: 'linear-gradient(135deg, #667eea, #764ba2)', // Gradient background
              border: 'none', // Remove border
              fontSize: '16px', // Larger text
              fontWeight: '500', // Medium weight for visibility
            }}
          >
            {/* Dynamic text based on loading state */}
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>

      {/* Divider separating sign-up and sign-in links */}
      <Divider>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          Already have an account?
        </Text>
      </Divider>

      {/* Link to navigate to login page */}
      <Link to="/login">
        <Button 
          type="text" // Text-only button style
          style={{
            width: '100%', // Full width button
            height: '48px', // Taller button for better click area
            borderRadius: '8px', // Rounded corners
            color: '#667eea', // Primary theme color
            fontWeight: '500', // Medium text weight
          }}
        >
          Sign In Instead
        </Button>
      </Link>
    </>
  );
};

// Export the component for use in other parts of the app
export default SignUpForm;
