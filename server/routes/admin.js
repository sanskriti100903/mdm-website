const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Contact = require('../models/Contact');
const { generateToken, verifyToken, requireSuperAdmin } = require('../middleware/auth');

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        message: 'Username and password are required',
        success: false 
      });
    }

    // Only allow login for the specific admin user
    if (username.toLowerCase() !== 'keshav') {
      return res.status(401).json({ 
        message: 'Invalid credentials',
        success: false 
      });
    }

    // Find admin by username or email
    const admin = await Admin.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: username.toLowerCase() }
      ]
    });

    if (!admin) {
      return res.status(401).json({ 
        message: 'Invalid credentials',
        success: false 
      });
    }

    if (!admin.isActive) {
      return res.status(401).json({ 
        message: 'Account is deactivated',
        success: false 
      });
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Invalid credentials',
        success: false 
      });
    }

    // Update last login
    await admin.updateLastLogin();

    // Generate token
    const token = generateToken(admin._id);

    res.json({
      message: 'Login successful',
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ 
      message: 'Login failed. Please try again.',
      success: false 
    });
  }
});

// Verify token and get admin info
router.get('/verify', verifyToken, (req, res) => {
  res.json({
    success: true,
    admin: {
      id: req.admin._id,
      username: req.admin.username,
      email: req.admin.email,
      role: req.admin.role,
      lastLogin: req.admin.lastLogin
    }
  });
});

// Get all contacts (with pagination and filtering)
router.get('/contacts', verifyToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const customerType = req.query.customerType;
    const search = req.query.search;

    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (customerType) filter.customerType = customerType;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalContacts = await Contact.countDocuments(filter);
    const totalPages = Math.ceil(totalContacts / limit);

    res.json({
      success: true,
      contacts,
      pagination: {
        currentPage: page,
        totalPages,
        totalContacts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch contacts',
      success: false 
    });
  }
});

// Update contact status
router.patch('/contacts/:id/status', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status',
        success: false 
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        message: 'Contact not found',
        success: false 
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      contact
    });

  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ 
      message: 'Failed to update contact status',
      success: false 
    });
  }
});

// Delete contact
router.delete('/contacts/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ 
        message: 'Contact not found',
        success: false 
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({ 
      message: 'Failed to delete contact',
      success: false 
    });
  }
});

// Get dashboard statistics
router.get('/dashboard/stats', verifyToken, async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'new' });
    const readContacts = await Contact.countDocuments({ status: 'read' });
    const repliedContacts = await Contact.countDocuments({ status: 'replied' });

    // Get contacts by customer type
    const customerTypeStats = await Contact.aggregate([
      {
        $group: {
          _id: '$customerType',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get recent contacts (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentContacts = await Contact.countDocuments({
      submittedAt: { $gte: sevenDaysAgo }
    });

    // Get monthly stats (last 12 months)
    const monthlyStats = await Contact.aggregate([
      {
        $match: {
          submittedAt: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 12))
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$submittedAt' },
            month: { $month: '$submittedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    res.json({
      success: true,
      stats: {
        totalContacts,
        newContacts,
        readContacts,
        repliedContacts,
        recentContacts,
        customerTypeStats,
        monthlyStats
      }
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch dashboard statistics',
      success: false 
    });
  }
});

module.exports = router;
