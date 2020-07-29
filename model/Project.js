const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectBackTitle: {
    type: String,
    required: true,
  },
  projectBackDescription: {
    type: String,
    required: true,
  },
  projectNo: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  isImageComponent: {
    type: Boolean,
    required: true,
  },
  imageWidth: {
    type: String,
  },
  animationClass: {
    type: String,
  },
  size: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
  },
});

module.exports = mongoose.model('Project', projectSchema);
