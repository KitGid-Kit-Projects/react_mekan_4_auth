// Import React to define the functional component
import React from "react";

// Import Ant Design components for form, input fields, and buttons
import { Form, Input, Button } from "antd";

// Import icons for email and password fields
import { MailOutlined, LockOutlined } from "@ant-design/icons";

// Define TypeScript interface for component props
interface Props {
  onSubmit: (values: { email: string; password: string }) => void; // Function to handle form submission
  loading: boolean; // Boolean to show loading spinner while signing in
}

// Define the functional React component
const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  // Create a form instance using Ant Design's form hook
  const [form] = Form.useForm();

  return (
    // Main Form container
    <Form
      form={form} // Connects the form instance
      name="login" // Form name (useful for debugging or analytics)
      onFinish={onSubmit} // Trigger function when form is successfully submitted
      layout="vertical" // Vertical layout for labels and fields
      size="large" // Large input size for better visibility
    >
      {/* --- EMAIL FIELD --- */}
      <Form.Item
        name="email" // Field name used in form values
        label="Email" // Label displayed above input
        // Validation rules for the email field
        rules={[
          { required: true, message: "Please input your email!" }, // Required field rule
          { type: "email", message: "Please enter a valid email!" }, // Must be valid email format
        ]}
      >
        {/* Email input box with mail icon */}
        <Input
          prefix={<MailOutlined />} // Icon inside input field
          placeholder="Enter your email" // Placeholder text
          style={{ borderRadius: "8px" }} // Rounded corners
        />
      </Form.Item>

      {/* --- PASSWORD FIELD --- */}
      <Form.Item
        name="password" // Field name used in form values
        label="Password" // Label displayed above input
        // Validation rules for the password field
        rules={[
          { required: true, message: "Please input your password!" }, // Required field rule
          { min: 6, message: "Password must be at least 6 characters!" }, // Minimum length validation
        ]}
      >
        {/* Password input with visibility toggle and lock icon */}
        <Input.Password
          prefix={<LockOutlined />} // Lock icon for password field
          placeholder="Enter your password" // Placeholder text
          style={{ borderRadius: "8px" }} // Rounded corners
        />
      </Form.Item>

      {/* --- SUBMIT BUTTON --- */}
      <Form.Item style={{ marginBottom: "16px" }}>
        {/* Submit button styled with gradient background */}
        <Button
          type="primary" // Primary button style
          htmlType="submit" // HTML submit action
          loading={loading} // Show loading spinner when signing in
          style={{
            width: "100%", // Full width button
            height: "48px", // Taller for better accessibility
            borderRadius: "8px", // Rounded edges for design consistency
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient color
            border: "none", // Remove border
            fontSize: "16px", // Larger font for readability
            fontWeight: "500", // Medium bold text
          }}
        >
          {/* Button text changes while loading */}
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form.Item>
    </Form>
  );
};

// Export component for use inside AuthCard or other login pages
export default LoginForm;
