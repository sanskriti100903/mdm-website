const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, customerType, phone, message } = req.body;

    // Validation
    if (!name || !email || !customerType || !phone || !message) {
      return res.status(400).json({ 
        message: 'All fields are required',
        success: false 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address',
        success: false 
      });
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({ 
        message: 'Please provide a valid phone number',
        success: false 
      });
    }

    // Create new contact submission
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      customerType,
      phone: phone.trim(),
      message: message.trim()
    });

    await newContact.save();

    res.status(201).json({
      message: 'Thank you for your message! We will get back to you soon.',
      success: true,
      contactId: newContact._id
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation failed',
        errors,
        success: false 
      });
    }

    res.status(500).json({ 
      message: 'Failed to submit contact form. Please try again.',
      success: false 
    });
  }
});

// Get contact statistics (for admin dashboard)
router.get('/stats', async (req, res) => {
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

    // Get recent contacts (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentContacts = await Contact.countDocuments({
      submittedAt: { $gte: thirtyDaysAgo }
    });

    res.json({
      totalContacts,
      newContacts,
      readContacts,
      repliedContacts,
      recentContacts,
      customerTypeStats,
      success: true
    });

  } catch (error) {
    console.error('Contact stats error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch contact statistics',
      success: false 
    });
  }
});

module.exports = router;
