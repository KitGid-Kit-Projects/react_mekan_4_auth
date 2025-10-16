// Import core React library
import React from "react";

// Import Form, Input, and Button components from Ant Design
import { Form, Input, Button } from "antd";

// Import icons for email and password fields from Ant Design icons
import { MailOutlined, LockOutlined } from "@ant-design/icons";

// Define the expected props using TypeScript interface
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function triggered when form is submitted
  loading: boolean; // Boolean that shows loading state during submission
}

// Define the LoginForm component using React.FC (Functional Component) with Props
const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  // Create a form instance using Ant Design's useForm hook
  const [form] = Form.useForm();

  // Return the JSX structure for the login form
  return (
    // Ant Design Form component for handling form data and validation
    <Form
      form={form} // Connects the form instance created above
      name="login" // Name identifier for the form
      onFinish={onSubmit} // Function to call when form validation passes and is submitted
      layout="vertical" // Arranges labels above inputs
      size="large" // Makes form elements larger for better UX
    >
      {/* Email input field */}
      <Form.Item
        name="email" // Key name for this field in form data
        label="Email" // Label shown above the input
        rules={[ // Validation rules for this field
          { required: true, message: "Please input your email!" }, // Required field rule
          { type: "email", message: "Please enter a valid email!" }, // Must be a valid email
        ]}
      >
        {/* Input field with mail icon */}
        <Input
          prefix={<MailOutlined />} // Adds a mail icon before the input text
          placeholder="Enter your email" // Placeholder text
          style={{ borderRadius: "8px" }} // Rounded corners for better aesthetics
        />
      </Form.Item>

      {/* Password input field */}
      <Form.Item
        name="password" // Key name for password in form data
        label="Password" // Label shown above the input
        rules={[ // Validation rules for password
          { required: true, message: "Please input your password!" }, // Required field
          { min: 6, message: "Password must be at least 6 characters!" }, // Minimum length validation
        ]}
      >
        {/* Password input with lock icon */}
        <Input.Password
          prefix={<LockOutlined />} // Adds lock icon before input text
          placeholder="Enter your password" // Placeholder text
          style={{ borderRadius: "8px" }} // Rounded corners
        />
      </Form.Item>

      {/* Submit button section */}
      <Form.Item style={{ marginBottom: "16px" }}>
        <Button
          type="primary" // Primary styled button
          htmlType="submit" // Defines button as a submit type
          loading={loading} // Displays loading spinner if true
          style={{
            width: "100%", // Full-width button
            height: "48px", // Makes button taller
            borderRadius: "8px", // Rounded corners
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
            border: "none", // Removes border for cleaner look
            fontSize: "16px", // Larger font for readability
            fontWeight: "500", // Medium font weight
          }}
        >
          {/* Dynamic button text changes when loading */}
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form.Item>
    </Form>
  );
};

// Export the component to be used in other parts of the app
export default LoginForm;
