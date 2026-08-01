import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { AIProviderService } from '../services/aiProviderService';

const prisma = new PrismaClient();

// --- PUBLIC READ ENDPOINTS ---

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: { _count: { select: { services: true, portfolio: true } } },
    });
    res.json({ success: true, data: categories });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const { category, featured } = req.query;
    const where: any = {};
    if (category) where.category = { slug: String(category) };
    if (featured === 'true') where.isFeatured = true;

    const services = await prisma.service.findMany({
      where,
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const { category, featured } = req.query;
    const where: any = {};
    if (category && category !== 'all') {
      where.category = { slug: String(category) };
    }
    if (featured === 'true') where.isFeatured = true;

    const portfolio = await prisma.portfolioItem.findMany({
      where,
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: portfolio });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: testimonials });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAIPromptTemplates = async (req: Request, res: Response) => {
  try {
    const templates = await prisma.aIPromptTemplate.findMany({
      where: { isActive: true },
    });
    res.json({ success: true, data: templates });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSettings = async (req: Request, res: Response) => {
  try {
    const settingsList = await prisma.setting.findMany();
    const settingsObj: Record<string, string> = {};
    settingsList.forEach((s) => {
      settingsObj[s.key] = s.value;
    });
    res.json({ success: true, data: settingsObj });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- CONTACT INQUIRY ENDPOINT ---

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, eventType, eventDate, guestCount, location, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Name, phone, and message are required.' });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        phone,
        email: email || null,
        eventType: eventType || 'General Inquiry',
        eventDate: eventDate || null,
        guestCount: guestCount ? parseInt(guestCount, 10) : null,
        location: location || 'Jamalpur / Munger',
        message,
        status: 'NEW',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Sintu Decorators will contact you shortly.',
      data: newMessage,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- AI EVENT CONSULTANT ENDPOINT ---

export const consultAIPlanner = async (req: Request, res: Response) => {
  try {
    const { message, history, context } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, message: 'Prompt message is required.' });
    }

    const result = await AIProviderService.generateConsultation({ message, history, context });
    res.json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- ADMIN AUTH & DASHBOARD CRUD ---

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role, name: admin.name },
      config.jwtSecret,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      admin: { id: admin.id, email: admin.email, name: admin.name, role: admin.role },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAdminStats = async (req: Request, res: Response) => {
  try {
    const totalInquiries = await prisma.contactMessage.count();
    const newInquiries = await prisma.contactMessage.count({ where: { status: 'NEW' } });
    const totalPortfolio = await prisma.portfolioItem.count();
    const totalServices = await prisma.service.count();

    res.json({
      success: true,
      data: {
        totalInquiries,
        newInquiries,
        totalPortfolio,
        totalServices,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAdminMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, data: messages });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });
    res.json({ success: true, data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createPortfolioItem = async (req: Request, res: Response) => {
  try {
    const { title, categoryId, mediaType, mediaUrl, description, location, isFeatured } = req.body;
    const newItem = await prisma.portfolioItem.create({
      data: {
        title,
        categoryId,
        mediaType: mediaType || 'IMAGE',
        mediaUrl,
        description,
        location: location || 'Jamalpur, Munger',
        isFeatured: Boolean(isFeatured),
      },
    });
    res.status(201).json({ success: true, data: newItem });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePortfolioItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.portfolioItem.delete({ where: { id } });
    res.json({ success: true, message: 'Portfolio item deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const { title, slug, categoryId, shortDesc, fullDesc, priceStarting, features, imageUrl, isFeatured } = req.body;
    const newService = await prisma.service.create({
      data: {
        title,
        slug,
        categoryId,
        shortDesc,
        fullDesc,
        priceStarting: priceStarting ? parseFloat(priceStarting) : null,
        features: typeof features === 'string' ? features : JSON.stringify(features || []),
        imageUrl,
        isFeatured: Boolean(isFeatured),
      },
    });
    res.status(201).json({ success: true, data: newService });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id } });
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
