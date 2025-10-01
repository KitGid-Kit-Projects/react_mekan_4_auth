import React from 'react';
import { Card, Typography, Space } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import SignUpForm from '@/components/SignUp/SignUpForm';


const { Title, Text } = Typography;

const SignUp: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card style={{ width: '100%', maxWidth: 400, borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <UserAddOutlined style={{ fontSize: '48px', color: '#667eea', marginBottom: '16px' }} />
            <Title level={2} style={{ margin: 0, color: '#262626' }}>Create Account</Title>
            <Text type="secondary">Sign up to get started</Text>
          </div>

          {/* 👇 Form ayrılıb komponentdədir */}
          <SignUpForm />
        </Space>
      </Card>
    </div>
  );
};

export default SignUp;
