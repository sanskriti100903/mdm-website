import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      // Verify token with backend
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await axios.get('http://localhost:5001/api/admin/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        navigate('/admin');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5001/api/admin/login', formData);
      
      if (response.data.success) {
        // Store token and user info
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
        
        // Redirect to admin dashboard
        navigate('/admin');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Login failed. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login-page">
      <Container fluid className="admin-login-container">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={4} md={6} sm={8}>
            <Card className="admin-login-card">
              <Card.Header className="admin-login-header text-center">
                <div className="admin-logo mb-3">
                  <FaShieldAlt className="admin-shield-icon" />
                </div>
                <h3 className="admin-login-title">MDM Group Admin</h3>
                <p className="admin-login-subtitle">Secure Admin Portal</p>
              </Card.Header>
              
              <Card.Body className="p-4">
                {error && (
                  <Alert variant="danger" className="mb-4">
                    <strong>Login Failed:</strong> {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="admin-form-label">
                      <FaUser className="me-2" />
                      Username or Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username or email"
                      className="admin-form-input"
                      required
                      disabled={loading}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="admin-form-label">
                      <FaLock className="me-2" />
                      Password
                    </Form.Label>
                    <div className="admin-password-input-container">
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="admin-form-input admin-password-input"
                        required
                        disabled={loading}
                      />
                      <Button
                        type="button"
                        variant="link"
                        className="admin-password-toggle"
                        onClick={togglePasswordVisibility}
                        disabled={loading}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </div>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="admin-login-btn w-100"
                    disabled={loading || !formData.username || !formData.password}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <FaShieldAlt className="me-2" />
                        Sign In to Admin Panel
                      </>
                    )}
                  </Button>
                </Form>

                <div className="admin-login-footer mt-4 text-center">
                  <small className="text-muted">
                    Authorized personnel only. All activities are logged.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
