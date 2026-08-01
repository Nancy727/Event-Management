import { Router } from 'express';
import {
  getCategories,
  getServices,
  getPortfolio,
  getTestimonials,
  getAIPromptTemplates,
  getSettings,
  createContactMessage,
  consultAIPlanner,
  adminLogin,
  getAdminStats,
  getAdminMessages,
  updateMessageStatus,
  createPortfolioItem,
  deletePortfolioItem,
  createService,
  deleteService,
} from '../controllers/apiControllers';
import { authenticateJwt } from '../middleware/auth';

const router = Router();

// Public Data Routes
router.get('/categories', getCategories);
router.get('/services', getServices);
router.get('/portfolio', getPortfolio);
router.get('/testimonials', getTestimonials);
router.get('/ai/prompts', getAIPromptTemplates);
router.get('/settings', getSettings);
router.post('/contact', createContactMessage);

// AI Consultant Router
router.post('/ai/consult', consultAIPlanner);

// Admin Authentication Route
router.post('/admin/login', adminLogin);

// Protected Admin Routes
router.get('/admin/stats', authenticateJwt as any, getAdminStats);
router.get('/admin/messages', authenticateJwt as any, getAdminMessages);
router.patch('/admin/messages/:id', authenticateJwt as any, updateMessageStatus);

router.post('/admin/portfolio', authenticateJwt as any, createPortfolioItem);
router.delete('/admin/portfolio/:id', authenticateJwt as any, deletePortfolioItem);

router.post('/admin/services', authenticateJwt as any, createService);
router.delete('/admin/services/:id', authenticateJwt as any, deleteService);

export default router;
