const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  customerType: {
    type: String,
    required: true,
    enum: ['Retailer', 'Wholesaler', 'Exporters', 'Modern Trade']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  }
});

// Index for better query performance
contactSchema.index({ submittedAt: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ customerType: 1 });

module.exports = mongoose.model('Contact', contactSchema);
