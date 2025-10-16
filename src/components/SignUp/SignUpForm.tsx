// Import React for building the functional component
import React from 'react'

// Import Ant Design components for form handling, inputs, and layout
import { Form, Input, Button, Typography, Divider } from 'antd'

// Import icons for email and password fields
import { LockOutlined, MailOutlined } from '@ant-design/icons'

// Import Link for navigation (to switch between login and signup pages)
import { Link } from 'react-router-dom'

// Import the custom signup hook that manages form logic, validation, and loading state
import { useAuthForm } from '@/hooks/SignUp/useAuthForm'

// Destructure the Text component from Typography for easy use
const { Text } = Typography

// Define the SignUpForm component
const SignUpForm: React.FC = () => {
  // Destructure useful values returned from the custom useAuthForm hook
  // - form: Ant Design form instance
  // - loading: boolean indicating if the form is submitting
  // - onFinish: handler function triggered after successful validation
  const { form, loading, onFinish } = useAuthForm('signup')

  // Return the form JSX structure
  return (
    <>
      {/* Main Sign-Up form container */}
      <Form
        form={form} // Connects to the useForm instance
        name="signup" // Unique form name
        onFinish={onFinish} // Function triggered after successful submission
        layout="vertical" // Vertical layout: labels above inputs
        size="large" // Larger input fields and buttons
      >
        {/* Email input field */}
        <Form.Item
          name="email" // Form data key
          label="Email" // Field label
          rules={[ // Validation rules for email input
            { required: true, message: 'Please input your email!' }, // Required rule
            { type: 'email', message: 'Enter valid email!' }, // Valid email format rule
          ]}
        >
          {/* Input field with mail icon */}
          <Input
            prefix={<MailOutlined />} // Icon before the input text
            placeholder="Enter your email" // Placeholder hint
            style={{ borderRadius: '8px' }} // Rounded input corners
          />
        </Form.Item>

        {/* Password input field */}
        <Form.Item
          name="password" // Form data key
          label="Password" // Field label
          rules={[ // Validation rules for password input
            { required: true, message: 'Please input your password!' }, // Required field
            { min: 6, message: 'Min 6 characters!' }, // Minimum password length rule
          ]}
        >
          {/* Secure password input with lock icon */}
          <Input.Password
            prefix={<LockOutlined />} // Lock icon before input text
            placeholder="Enter your password" // Placeholder text
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Confirm password field */}
        <Form.Item
          name="confirmPassword" // Form data key
          label="Confirm Password" // Field label
          dependencies={['password']} // Re-validates when the password field changes
          rules={[
            { required: true, message: 'Please confirm your password!' }, // Required field
            // Custom validator ensures both passwords match
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value)
                  return Promise.resolve()
                return Promise.reject(
                  new Error('The two passwords do not match!')
                )
              },
            }),
          ]}
        >
          {/* Confirm password input with lock icon */}
          <Input.Password
            prefix={<LockOutlined />} // Icon before input text
            placeholder="Confirm your password" // Placeholder hint
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Item>

        {/* Submit button section */}
        <Form.Item>
          <Button
            type="primary" // Primary Ant Design style
            htmlType="submit" // Defines this as the submit button
            loading={loading} // Shows a spinner while the form is submitting
            style={{
              width: '100%', // Full-width button
              height: '48px', // Taller for better accessibility
              borderRadius: '8px', // Rounded button corners
              background:
                'linear-gradient(135deg, #667eea, #764ba2)', // Gradient background
              border: 'none', // Removes border
              fontSize: '16px', // Larger text for readability
              fontWeight: '500', // Medium weight for emphasis
            }}
          >
            {/* Conditional text based on loading state */}
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>

      {/* Divider separating sign-up and login options */}
      <Divider>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          Already have an account?
        </Text>
      </Divider>

      {/* Link to navigate to the Login page */}
      <Link to="/login">
        <Button
          type="text" // Text-only button style
          style={{
            width: '100%', // Full-width button
            height: '48px', // Consistent button height
            borderRadius: '8px', // Rounded corners
            color: '#667eea', // Themed color
            fontWeight: '500', // Medium font weight
          }}
        >
          Sign In Instead
        </Button>
      </Link>
    </>
  )
}

// Export component for reuse in the SignUp page
export default SignUpForm
