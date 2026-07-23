require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

const app = express();

connectDB();

app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API running' });
});

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
