# MDM Group Admin System Setup

This document explains how to set up and use the admin system for managing contact form submissions.

## Prerequisites

1. **MongoDB**: Install MongoDB locally or use MongoDB Atlas
2. **Node.js**: Version 14 or higher

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the root directory (already created):
```env
MONGODB_URI=mongodb://localhost:27017/mdm-website
JWT_SECRET=mdm-website-super-secret-key-2024-change-in-production
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:
- **Windows**: Start MongoDB service
- **macOS**: `brew services start mongodb/brew/mongodb-community`
- **Linux**: `sudo systemctl start mongod`

### 4. Create Admin User
Run the admin creation script:
```bash
npm run create-admin
```

This will create a default admin user:
- **Username**: `admin`
- **Password**: `admin123`
- **Email**: `admin@mdmgroup.com`
- **Role**: `super-admin`

⚠️ **IMPORTANT**: Change the default password after first login!

### 5. Start the Application
```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
# Backend only
npm run server

# Frontend only (in another terminal)
npm start
```

## Admin System Features

### Admin Login (`/admin/login`)
- Secure authentication with JWT tokens
- Username or email login
- Password visibility toggle
- Session management

### Admin Dashboard (`/admin`)
- **Statistics Overview**:
  - Total contacts
  - New messages
  - Replied messages
  - Weekly activity

- **Contact Management**:
  - View all contact submissions in a table
  - Filter by status (new, read, replied, archived)
  - Filter by customer type
  - Search by name, email, or message content
  - Update contact status
  - Delete contacts
  - Pagination support

- **Contact Status Management**:
  - `new`: Newly submitted (default)
  - `read`: Admin has viewed the message
  - `replied`: Admin has responded to the customer
  - `archived`: Message is archived

## API Endpoints

### Contact Endpoints
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/stats` - Get contact statistics

### Admin Endpoints
- `POST /api/admin/login` - Admin login
- `GET /api/admin/verify` - Verify JWT token
- `GET /api/admin/contacts` - Get contacts (with filters & pagination)
- `PATCH /api/admin/contacts/:id/status` - Update contact status
- `DELETE /api/admin/contacts/:id` - Delete contact
- `GET /api/admin/dashboard/stats` - Get dashboard statistics

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  customerType: String (enum: ['Retailer', 'Wholesaler', 'Exporters', 'Modern Trade']),
  phone: String (required),
  message: String (required),
  submittedAt: Date (default: now),
  status: String (enum: ['new', 'read', 'replied', 'archived'], default: 'new')
}
```

### Admin Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['admin', 'super-admin'], default: 'admin'),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date (default: now)
}
```

## Security Features

1. **Password Hashing**: bcrypt with salt rounds
2. **JWT Authentication**: 24-hour token expiration
3. **Input Validation**: Server-side validation for all inputs
4. **CORS Protection**: Configured for frontend domain
5. **Error Handling**: Comprehensive error responses
6. **Activity Logging**: Login tracking

## Usage

1. **Access Admin Panel**: Navigate to `http://localhost:3000/admin/login`
2. **Login**: Use the default credentials or your custom admin account
3. **View Contacts**: All contact form submissions appear in the dashboard table
4. **Manage Contacts**: 
   - Change status using the dropdown
   - Delete unwanted contacts
   - Use filters to find specific contacts
5. **Monitor Activity**: Check statistics cards for overview

## Production Deployment

1. **Change Environment Variables**:
   - Use a strong JWT secret
   - Use MongoDB Atlas or production MongoDB
   - Set appropriate CORS origins

2. **Create Production Admin**:
   - Delete the default admin user
   - Create a new admin with a strong password

3. **Security Considerations**:
   - Use HTTPS in production
   - Implement rate limiting
   - Add IP whitelisting for admin access
   - Regular security updates

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **Admin Login Failed**:
   - Verify admin user exists: `npm run create-admin`
   - Check credentials

3. **CORS Errors**:
   - Ensure backend is running on port 5000
   - Check FRONTEND_URL in `.env`

4. **Token Expired**:
   - Login again to get a new token
   - Tokens expire after 24 hours

### Support

For technical support or questions about the admin system, please contact the development team.
