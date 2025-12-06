// Import core React library
import React from "react";

// Import Form, Input, and Button components from Ant Design
import { Form, Input, Button } from "antd";

// Import icons for email and password fields
import { MailOutlined, LockOutlined } from "@ant-design/icons";

// Define the TypeScript interface for props
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function triggered when form is submitted
  loading: boolean; // Whether the sign-in process is loading
}

// Define the LoginForm functional component
const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  // Create a form instance using Ant Design's useForm hook
  const [form] = Form.useForm();

  // Return the form JSX
  return (
    // Ant Design Form component: container for form inputs
    <Form
      form={form} // Connect form instance to enable controlled behavior
      name="login" // Unique form name
      onFinish={onSubmit} // Triggered when form is successfully validated and submitted
      layout="vertical" // Places labels above inputs
      size="large" // Makes inputs and buttons slightly larger
    >
      {/* Email input field */}
      <Form.Item
        name="email" // Field name used to store value
        label="Email" // Label shown above input
        rules={[
          { required: true, message: "Please input your email!" }, // Required validation rule
          { type: "email", message: "Please enter a valid email!" }, // Email format validation
        ]}
      >
        <Input
          prefix={<MailOutlined />} // Adds mail icon before input
          placeholder="Enter your email" // Placeholder text
          style={{ borderRadius: "8px" }} // Rounded input edges
          disabled={loading} // Disable when loading
        />
      </Form.Item>

      {/* Password input field */}
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please input your password!" }, // Required rule
          { min: 6, message: "Password must be at least 6 characters!" }, // Minimum length rule
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />} // Lock icon for password
          placeholder="Enter your password"
          style={{ borderRadius: "8px" }}
          disabled={loading} // Disable when loading
        />
      </Form.Item>

      {/* Submit button section */}
      <Form.Item style={{ marginBottom: "16px" }}>
        <Button
          type="primary" // Primary color button
          htmlType="submit" // Makes button submit the form
          loading={loading} // Shows loading spinner when true
          disabled={loading} // Disable when loading
          style={{
            width: "100%", // Full width
            height: "48px", // Taller for accessibility
            borderRadius: "8px", // Rounded edges
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
            border: "none", // Removes default border
            fontSize: "16px", // Slightly larger text
            fontWeight: "500", // Medium bold text
          }}
        >
          {/* Button label changes when loading */}
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form.Item>
    </Form>
  );
};

// Export the component for use elsewhere
export default LoginForm;