export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  category?: { name: string; slug: string };
  shortDesc: string;
  fullDesc: string;
  priceStarting?: number;
  features: string | string[];
  imageUrl: string;
  isFeatured: boolean;
}

export interface PortfolioMedia {
  id: string;
  title: string;
  categoryId: string;
  category?: { name: string; slug: string };
  mediaType: 'IMAGE' | 'VIDEO';
  mediaUrl: string;
  description?: string;
  location?: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  comment: string;
  eventType: string;
  eventDate?: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate?: string;
  guestCount?: number;
  location?: string;
  message: string;
  status?: 'NEW' | 'CONTACTED' | 'BOOKED' | 'ARCHIVED';
  createdAt?: string;
}

export interface AIPrompt {
  id: string;
  title: string;
  category: string;
  promptText: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedBudget?: { min: number; max: number; description: string };
  recommendedServices?: string[];
}

export interface AIResponse {
  reply: string;
  suggestedBudget?: { min: number; max: number; description: string };
  recommendedServices?: string[];
}
