import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Form, Pagination, Alert, Spinner, Modal } from 'react-bootstrap';
import { FaUsers, FaEnvelope, FaEye, FaTrash, FaFilter, FaSearch, FaSignOutAlt, FaHome, FaChartBar } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    customerType: '',
    search: ''
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    
    if (!token || !user) {
      navigate('/admin/login');
      return;
    }

    setAdminUser(JSON.parse(user));
    fetchDashboardData();
    fetchContacts();
  }, [currentPage, filters, navigate]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return { Authorization: `Bearer ${token}` };
  };

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/dashboard/stats`, {
        headers: getAuthHeaders()
      });
      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        setError('Failed to fetch dashboard statistics');
      }
    }
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
        ...filters
      });

      const response = await axios.get(`${API_BASE_URL}/api/admin/contacts?${params}`, {
        headers: getAuthHeaders()
      });

      if (response.data.success) {
        setContacts(response.data.contacts);
        setTotalPages(response.data.pagination.totalPages);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        setError('Failed to fetch contacts');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/api/admin/contacts/${contactId}/status`,
        { status: newStatus },
        { headers: getAuthHeaders() }
      );

      if (response.data.success) {
        setContacts(contacts.map(contact => 
          contact._id === contactId ? { ...contact, status: newStatus } : contact
        ));
        fetchDashboardData(); // Refresh stats
      }
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        setError('Failed to update contact status');
      }
    }
  };

  const handleDeleteContact = async () => {
    if (!contactToDelete) return;

    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/admin/contacts/${contactToDelete._id}`,
        { headers: getAuthHeaders() }
      );

      if (response.data.success) {
        setContacts(contacts.filter(contact => contact._id !== contactToDelete._id));
        setShowDeleteModal(false);
        setContactToDelete(null);
        fetchDashboardData(); // Refresh stats
      }
    } catch (error) {
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        setError('Failed to delete contact');
      }
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const getStatusBadge = (status) => {
    const variants = {
      new: 'primary',
      read: 'info',
      replied: 'success',
      archived: 'secondary'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status.toUpperCase()}</Badge>;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && contacts.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <Container fluid>
          <Row className="align-items-center py-3">
            <Col>
              <h2 className="admin-dashboard-title mb-0">
                <FaChartBar className="me-2" />
                Admin Dashboard
              </h2>
              {adminUser && (
                <small className="text-muted">
                  Welcome back, {adminUser.username} ({adminUser.role})
                </small>
              )}
            </Col>
            <Col xs="auto">
              <Button as={Link} to="/" variant="outline-primary" className="me-2">
                <FaHome className="me-1" />
                Visit Site
              </Button>
              <Button variant="outline-danger" onClick={handleLogout}>
                <FaSignOutAlt className="me-1" />
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="admin-content">
        {error && (
          <Alert variant="danger" dismissible onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {/* Statistics Cards */}
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-3">
            <Card className="admin-stat-card">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="admin-stat-icon bg-primary">
                    <FaUsers />
                  </div>
                  <div className="ms-3">
                    <h3 className="mb-0">{stats.totalContacts || 0}</h3>
                    <p className="text-muted mb-0">Total Contacts</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="admin-stat-card">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="admin-stat-icon bg-warning">
                    <FaEnvelope />
                  </div>
                  <div className="ms-3">
                    <h3 className="mb-0">{stats.newContacts || 0}</h3>
                    <p className="text-muted mb-0">New Messages</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="admin-stat-card">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="admin-stat-icon bg-success">
                    <FaEye />
                  </div>
                  <div className="ms-3">
                    <h3 className="mb-0">{stats.repliedContacts || 0}</h3>
                    <p className="text-muted mb-0">Replied</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="admin-stat-card">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="admin-stat-icon bg-info">
                    <FaChartBar />
                  </div>
                  <div className="ms-3">
                    <h3 className="mb-0">{stats.recentContacts || 0}</h3>
                    <p className="text-muted mb-0">This Week</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filters */}
        <Card className="mb-4">
          <Card.Header>
            <FaFilter className="me-2" />
            Filters & Search
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Statuses</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Customer Type</Form.Label>
                  <Form.Select
                    name="customerType"
                    value={filters.customerType}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Types</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Exporters">Exporters</option>
                    <option value="Modern Trade">Modern Trade</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Search</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      name="search"
                      value={filters.search}
                      onChange={handleFilterChange}
                      placeholder="Search by name, email, or message..."
                    />
                    <Button variant="outline-primary" className="ms-2">
                      <FaSearch />
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Contacts Table */}
        <Card>
          <Card.Header>
            <FaEnvelope className="me-2" />
            Contact Submissions
          </Card.Header>
          <Card.Body className="p-0">
            {loading ? (
              <div className="text-center p-4">
                <Spinner animation="border" role="status" />
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center p-4">
                <p className="text-muted">No contacts found matching your criteria.</p>
              </div>
            ) : (
              <Table responsive hover className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Customer Type</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="text-nowrap">
                        {formatDate(contact.submittedAt)}
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>
                        <Badge bg="light" text="dark">
                          {contact.customerType}
                        </Badge>
                      </td>
                      <td>{contact.phone}</td>
                      <td>
                        <div className="admin-message-preview">
                          {contact.message.length > 50 
                            ? `${contact.message.substring(0, 50)}...` 
                            : contact.message
                          }
                        </div>
                      </td>
                      <td>{getStatusBadge(contact.status)}</td>
                      <td>
                        <div className="admin-action-buttons">
                          <Form.Select
                            size="sm"
                            value={contact.status}
                            onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                            className="me-2"
                            style={{ width: 'auto', display: 'inline-block' }}
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                            <option value="archived">Archived</option>
                          </Form.Select>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => {
                              setContactToDelete(contact);
                              setShowDeleteModal(true);
                            }}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
          {totalPages > 1 && (
            <Card.Footer>
              <Pagination className="justify-content-center mb-0">
                <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </Pagination>
            </Card.Footer>
          )}
        </Card>
      </Container>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this contact submission from{' '}
          <strong>{contactToDelete?.name}</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteContact}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
