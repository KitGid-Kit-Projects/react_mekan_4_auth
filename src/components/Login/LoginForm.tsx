// Import React for creating functional components
import React from "react"

// Import Ant Design form-related components
import { Form, Input, Button } from "antd"

// Import Ant Design icons for visual cues in input fields
import { MailOutlined, LockOutlined } from "@ant-design/icons"

// Define the expected props for the LoginForm component
interface Props {
  onSubmit: (values: { email: string; password: string }) => void // Function to handle form submission
  loading: boolean // Boolean that controls loading state during login
}

// Define the functional component for the login form
const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  // Create a form instance using Ant Design's useForm hook
  const [form] = Form.useForm()

  // Render the form UI
  return (
    // Main Form wrapper from Ant Design
    <Form
      form={form} // Connect the form instance
      name="login" // Unique form name
      onFinish={onSubmit} // Function called after successful validation
      layout="vertical" // Vertical form layout (labels above inputs)
      size="large" // Makes input fields and buttons slightly larger
    >
      {/* Email input field */}
      <Form.Item
        name="email" // Field name for form data
        label="Email" // Label displayed above the field
        rules={[ // Validation rules
          { required: true, message: "Please input your email!" }, // Required field validation
          { type: "email", message: "Please enter a valid email!" }, // Valid email format validation
        ]}
      >
        {/* Email text input with a mail icon */}
        <Input
          prefix={<MailOutlined />} // Adds an email icon to the left of input
          placeholder="Enter your email" // Placeholder text for user guidance
          style={{ borderRadius: "8px" }} // Rounded corners for modern design
        />
      </Form.Item>

      {/* Password input field */}
      <Form.Item
        name="password" // Field name for form data
        label="Password" // Label displayed above input
        rules={[ // Validation rules for password field
          { required: true, message: "Please input your password!" }, // Must not be empty
          { min: 6, message: "Password must be at least 6 characters!" }, // Minimum length validation
        ]}
      >
        {/* Password input with lock icon */}
        <Input.Password
          prefix={<LockOutlined />} // Adds a lock icon before text
          placeholder="Enter your password" // Placeholder hint text
          style={{ borderRadius: "8px" }} // Rounded corners for clean look
        />
      </Form.Item>

      {/* Submit button container */}
      <Form.Item style={{ marginBottom: "16px" }}>
        <Button
          type="primary" // Primary Ant Design button (blue by default)
          htmlType="submit" // Defines the button as a form submitter
          loading={loading} // Displays loading spinner while logging in
          style={{
            width: "100%", // Full width for alignment
            height: "48px", // Taller button for easier tapping
            borderRadius: "8px", // Smooth rounded corners
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background matching theme
            border: "none", // Removes default border
            fontSize: "16px", // Larger text size for readability
            fontWeight: "500", // Medium font weight for emphasis
          }}
        >
          {/* Dynamic button label: shows spinner text during login */}
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form.Item>
    </Form>
  )
}

// Export component for reuse in pages like Login or AuthCard
export default LoginForm