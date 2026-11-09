import express from 'express';
import cors from 'cors';
import { config } from './config';
import apiRoutes from './routes/apiRoutes';

import path from 'path';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Serve Public Static Images & Files
app.use(express.static(path.join(__dirname, '../../client/public')));

// API Namespace
app.use('/api', apiRoutes);

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Sintu Decorators REST API & AI Consultant', time: new Date().toISOString() });
});

app.listen(config.port, () => {
  console.log(`🚀 Sintu Decorators Server running on http://localhost:${config.port}`);
});
