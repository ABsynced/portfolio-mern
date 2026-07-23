const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    image: { type: String, default: '' },
    liveUrl: { type: String, default: '' },
    repoUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
