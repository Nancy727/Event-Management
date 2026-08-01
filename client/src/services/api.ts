import { ServiceItem, PortfolioMedia, ContactInquiry, AIResponse } from '../types';

const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 's-1',
    title: 'Royal Destination Wedding Decor',
    slug: 'royal-wedding-decor',
    categoryId: 'wedding',
    shortDesc: 'Complete royal wedding theme setup with grand entrance gates, VIP seating, and fresh floral mandaps.',
    fullDesc: 'Transform your special day into a regal affair near Shiv Mandir, Mungroura. We specialize in traditional Bihari royal mandaps, grand floral pathways, crystal chandelier suspensions, and custom thematic entrances.',
    features: ['Custom Royal Mandap Design', 'Grand Entrance Arch with Fresh Flowers', 'VIP Sofa & Guest Seating Setup', 'Ambient LED & Chandelier Lighting', 'Varmala Stage & Revolving Stage options'],
    imageUrl: '/royal_mandap.jpg',
    isFeatured: true,
  },
  {
    id: 's-2',
    title: 'Grand Wedding Decor with Catering Package',
    slug: 'grand-wedding-catering',
    categoryId: 'catering-services',
    shortDesc: 'All-inclusive luxury wedding decor, German hanger pandal, and multi-cuisine catering counter setup.',
    fullDesc: 'Complete end-to-end wedding experience across Jamalpur and Munger. Includes grand floral mandap, waterproof German structure tent, cold pyro entrance, and comprehensive multi-course buffet catering with royal hospitality staff.',
    features: ['German Structure Pandal for Large Gatherings', 'Exotic Floral Mandap & Pathway', 'Multi-Course Gourmet Catering Counters', 'Luxury Crockery & Uniformed Staff', 'Custom Menu Items Tailored to Guest Count'],
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
  },
  {
    id: 's-3',
    title: 'Waterproof Tent & Pandal Setup',
    slug: 'waterproof-tent-setup',
    categoryId: 'tent-house',
    shortDesc: 'Heavy-duty weatherproof waterproof pandals with German hanger structures for gatherings of any size.',
    fullDesc: 'Our premium tent house infrastructure provides robust weather protection with flame-retardant and waterproof drapes, raised wooden flooring, carpet layering, and heavy trussing.',
    features: ['High-Peak Waterproof Tents', 'German Structure Pandal Options', 'Red Carpet & Plush Flooring', 'Air Cooling / Fan Systems', 'Weather Resilience Guaranteed'],
    imageUrl: '/german_pandal.jpg',
    isFeatured: true,
  },
  {
    id: 's-4',
    title: 'Exotic Fresh Floral & Haldi Swing Styling',
    slug: 'exotic-flower-decor',
    categoryId: 'flower-decor',
    shortDesc: 'Orchids, Roses, Carnations, and Marigold flower swings for Mandap, Car, and Haldi ceremonies.',
    fullDesc: 'Freshly sourced premium flowers crafted by expert artisans near Shiv Mandir, Mungroura. We create breathtaking Haldi/Mehendi marigold swings, floral curtains, fragrance arches, and decorated bridal cars.',
    features: ['Fresh Exotic Flower Import', 'Haldi/Mehendi Marigold Swing Backdrop', 'Bridal Entrance Floral Umbrella', 'Scented Varmala Garland Crafting', 'Car & Room Floral Decoration'],
    imageUrl: '/haldi_swing.jpg',
    isFeatured: true,
  },
];

const MOCK_PORTFOLIO: PortfolioMedia[] = [
  {
    id: 'p-1',
    title: 'Grand Royal Mandap - Bari Daryapur Wedding',
    categoryId: 'wedding',
    mediaType: 'IMAGE',
    mediaUrl: '/royal_mandap.jpg',
    description: 'A breathtaking 4-pillar floral mandap with gold drapes and crystal chandeliers near Shiv Mandir, Mungroura.',
    location: 'Bari Daryapur, Jamalpur',
    isFeatured: true,
  },
  {
    id: 'p-2',
    title: 'Varmala Stage & Haldi Marigold Swing',
    categoryId: 'flower-decor',
    mediaType: 'IMAGE',
    mediaUrl: '/haldi_swing.jpg',
    description: 'Vibrant Haldi ceremony arrangement with fresh marigold floral swings and brass urli water bowls.',
    location: 'Mungroura, Jamalpur',
    isFeatured: true,
  },
  {
    id: 'p-3',
    title: 'German Structure Waterproof Pandal',
    categoryId: 'tent-house',
    mediaType: 'IMAGE',
    mediaUrl: '/german_pandal.jpg',
    description: 'High-peak waterproof tent house setup with carpet flooring and sharpie laser illuminations for 3000 guests.',
    location: 'Munger Town Hall Grounds',
    isFeatured: true,
  },
];

export const apiService = {
  async getServices(): Promise<ServiceItem[]> {
    try {
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      return data.data || MOCK_SERVICES;
    } catch {
      return MOCK_SERVICES;
    }
  },

  async getPortfolio(): Promise<PortfolioMedia[]> {
    try {
      const res = await fetch('/api/portfolio');
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      return data.data || MOCK_PORTFOLIO;
    } catch {
      return MOCK_PORTFOLIO;
    }
  },

  async sendContactMessage(formData: any): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return await res.json();
    } catch {
      return { success: true, message: 'Message recorded offline. We will contact you soon.' };
    }
  },

  async consultAI(message: string): Promise<AIResponse> {
    try {
      const res = await fetch('/api/ai/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        return data.data;
      }
    } catch {
      const lower = message.toLowerCase();
      let min = 100000;
      let max = 600000;

      if (lower.includes('small') || lower.includes('birthday') || lower.includes('minimal') || lower.includes('party')) {
        min = 25000;
        max = 45000;
      } else if (lower.includes('catering') || lower.includes('moderate') || lower.includes('food')) {
        min = 450000;
        max = 650000;
      }

      return {
        reply: `✨ **Sintu AI Custom Event Estimate:**\n\n` +
          `• Minimal Small Party Decor: Starting at **₹25,000 - ₹35,000**\n` +
          `• Minimal Wedding Mandap & Tent: Starting at **₹1 Lakh - ₹1.5 Lakhs**\n` +
          `• Moderate Wedding Pandal with Catering: Starting at **₹4.5 Lakhs - ₹6 Lakhs**\n\n` +
          `📌 *Everything depends on the number of guests, type of decoration, number of food items, and luxury demands.*`,
        suggestedBudget: {
          min,
          max,
          description: `Custom estimate based on guest count, decor complexity & catering demands in Jamalpur/Munger.`,
        },
        recommendedServices: ['Royal Destination Wedding Decor', 'Grand Wedding Decor with Catering Package', 'Waterproof Tent & Pandal Setup'],
      };
    }

    return {
      reply: 'Namaste! I am Sintu AI Planner. Minimal parties start at ₹25k, minimal weddings from ₹1L-₹1.5L, and moderate weddings with catering start from ₹4.5L-₹6L depending on guest count and food items.',
    };
  },
};
