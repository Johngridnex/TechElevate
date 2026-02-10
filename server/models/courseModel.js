const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes
    required: true
  }
});

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  lessons: [lessonSchema]
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: String
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  modules: [moduleSchema]
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
