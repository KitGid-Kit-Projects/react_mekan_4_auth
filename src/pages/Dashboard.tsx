import React from 'react';
import { Layout, Card, Typography, Button, Space, Row, Col, Avatar, Statistic } from 'antd';
import { 
  LogoutOutlined, 
  UserOutlined, 
  MailOutlined, 
  CalendarOutlined,
  TrophyOutlined,
  HeartOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <RocketOutlined style={{ fontSize: '24px', color: 'white' }} />
          <Title level={3} style={{ margin: 0, color: 'white' }}>
            Dashboard
          </Title>
        </div>
        
        <Button 
          type="text" 
          icon={<LogoutOutlined />}
          onClick={handleSignOut}
          style={{ 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '500'
          }}
        >
          Sign Out
        </Button>
      </Header>

      <Content style={{ 
        padding: '24px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: 'calc(100vh - 64px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Welcome Section */}
          <Card 
            style={{ 
              marginBottom: '24px',
              borderRadius: '12px',
              background: 'white',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <Space size="large" style={{ width: '100%' }}>
              <Avatar 
                size={80} 
                icon={<UserOutlined />}
                style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
              <div>
                <Title level={2} style={{ margin: 0, color: '#262626' }}>
                  Welcome back! 🎉
                </Title>
                <Space direction="vertical" size="small">
                  <Space>
                    <MailOutlined style={{ color: '#667eea' }} />
                    <Text strong>{currentUser?.email}</Text>
                  </Space>
                  <Space>
                    <CalendarOutlined style={{ color: '#667eea' }} />
                    <Text type="secondary">
                      Member since {currentUser?.metadata.creationTime ? 
                        formatDate(currentUser.metadata.creationTime) : 'N/A'}
                    </Text>
                  </Space>
                </Space>
              </div>
            </Space>
          </Card>

          {/* Stats Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
            <Col xs={24} sm={8}>
              <Card 
                style={{ 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}
              >
                <Statistic
                  title={<span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Days Active</span>}
                  value={Math.floor((Date.now() - new Date(currentUser?.metadata.creationTime || 0).getTime()) / (1000 * 60 * 60 * 24))}
                  valueStyle={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}
                  prefix={<CalendarOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card 
                style={{ 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  border: 'none'
                }}
              >
                <Statistic
                  title={<span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Account Status</span>}
                  value="Verified"
                  valueStyle={{ color: '#d17842', fontSize: '24px', fontWeight: 'bold' }}
                  prefix={<TrophyOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card 
                style={{ 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  border: 'none'
                }}
              >
                <Statistic
                  title={<span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Security Level</span>}
                  value="High"
                  valueStyle={{ color: '#2d9e8a', fontSize: '24px', fontWeight: 'bold' }}
                  prefix={<HeartOutlined />}
                />
              </Card>
            </Col>
          </Row>

          {/* Account Information */}
          <Card 
            title={
              <Space>
                <UserOutlined style={{ color: '#667eea' }} />
                <span>Account Information</span>
              </Space>
            }
            style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <Row gutter={[24, 16]}>
              <Col xs={24} md={12}>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                    User ID
                  </Text>
                  <Text 
                    code 
                    style={{ 
                      background: '#f5f5f5', 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    {currentUser?.uid}
                  </Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                    Email Verified
                  </Text>
                  <Text style={{ 
                    color: currentUser?.emailVerified ? '#52c41a' : '#ff4d4f',
                    fontWeight: '500'
                  }}>
                    {currentUser?.emailVerified ? 'Yes' : 'No'}
                  </Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                    Last Sign In
                  </Text>
                  <Text>
                    {currentUser?.metadata.lastSignInTime ? 
                      formatDate(currentUser.metadata.lastSignInTime) : 'N/A'}
                  </Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                    Provider
                  </Text>
                  <Text>Email/Password</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;