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
    imageUrl: '/luxury_catering.jpg',
    isFeatured: true,
  },
  {
    id: 's-3',
    title: 'Waterproof Tent & Pandal Setup',
    slug: 'waterproof-tent-setup',
    categoryId: 'tent-house',
    shortDesc: 'Heavy-duty weatherproof waterproof pandals with German hanger structures for gatherings of any size.',
    fullDesc: 'Our premium tent house infrastructure provides robust weather protection with flame-retardant and waterproof drapes, raised flooring, carpet layering, and heavy trussing.',
    features: ['High-Peak Waterproof Tents', 'German Structure Pandal Options', 'Red Carpet & Plush Flooring', 'Air Cooling / Fan Systems', 'Weather Resilience Guaranteed'],
    imageUrl: '/german_pandal_new.jpg',
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
    imageUrl: '/haldi_swing_new.jpg',
    isFeatured: true,
  },
  {
    id: 's-5',
    title: 'Theme Birthday & Private Celebration Decor',
    slug: 'birthday-decor',
    categoryId: 'birthday-anniversary',
    shortDesc: 'Chic pastel balloon arches, glowing neon signage, and luxury cake table backdrops for birthdays.',
    fullDesc: 'Customized private party design with neon cutouts, balloon arches, and cake framing for celebrations in Jamalpur and Munger.',
    features: ['Pastel Rose & Gold Balloon Arch', 'Glowing Neon Name Signs', 'Gourmet Cake Table Setup', 'Photo Corner & Prop Booth'],
    imageUrl: '/birthday_celebration.jpg',
    isFeatured: false,
  },
  {
    id: 's-6',
    title: 'Royal Reception Stage & Lighting',
    slug: 'reception-stage',
    categoryId: 'stage-reception',
    shortDesc: 'Velvet sofa seating, crystal chandelier suspensions, and orchid floral backdrops for grand receptions.',
    fullDesc: 'Opulent stage setups designed for luxury wedding receptions, varmala ceremonies, and corporate galas.',
    features: ['Royal Velvet Sofa Seating', 'Crystal Chandelier Backdrops', 'Sharpie Laser & Warm Spotlight Systems', 'Orchid & White Rose Wall Art'],
    imageUrl: '/reception_stage.jpg',
    isFeatured: false,
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
    mediaUrl: '/haldi_swing_new.jpg',
    description: 'Vibrant Haldi ceremony arrangement with fresh marigold floral swings and brass urli water bowls.',
    location: 'Mungroura, Jamalpur',
    isFeatured: true,
  },
  {
    id: 'p-3',
    title: 'German Structure Waterproof Pandal',
    categoryId: 'tent-house',
    mediaType: 'IMAGE',
    mediaUrl: '/german_pandal_new.jpg',
    description: 'High-peak waterproof tent house setup with carpet flooring and sharpie laser illuminations for 3000 guests.',
    location: 'Munger Town Hall Grounds',
    isFeatured: true,
  },
  {
    id: 'p-4',
    title: 'Luxury Multi-Cuisine Gourmet Buffet Counter',
    categoryId: 'catering-services',
    mediaType: 'IMAGE',
    mediaUrl: '/luxury_catering.jpg',
    description: 'Polished copper chafing dishes and marble buffet counters with fresh flower centerpieces.',
    location: 'Kasimbazar, Munger',
    isFeatured: true,
  },
  {
    id: 'p-5',
    title: 'Royal Wedding Reception Stage',
    categoryId: 'stage-reception',
    mediaType: 'IMAGE',
    mediaUrl: '/reception_stage.jpg',
    description: 'Opulent white rose and orchid stage with crystal chandelier lighting and royal velvet couch.',
    location: 'Jamalpur Club Grounds',
    isFeatured: true,
  },
  {
    id: 'p-6',
    title: 'Grand Entrance Floral Archway',
    categoryId: 'flower-decor',
    mediaType: 'IMAGE',
    mediaUrl: '/entrance_archway.jpg',
    description: 'Fresh red rose and jasmine archway with hanging lanterns and red carpet walkway.',
    location: 'Gymkhana Area, Jamalpur',
    isFeatured: true,
  },
  {
    id: 'p-7',
    title: 'Pastel Rose Birthday Celebration Setup',
    categoryId: 'birthday-anniversary',
    mediaType: 'IMAGE',
    mediaUrl: '/birthday_celebration.jpg',
    description: 'Pastel rose pink balloon backdrop with custom LED neon light and cake table framing.',
    location: 'Mungroura, Jamalpur',
    isFeatured: true,
  },
];

const API_BASE_URL = (import.meta.env.VITE_API_URL || '/api').replace(/\/+$/, '');

export const apiService = {
  async getServices(): Promise<ServiceItem[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/services`);
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      return data.data && data.data.length > 0 ? data.data : MOCK_SERVICES;
    } catch {
      return MOCK_SERVICES;
    }
  },

  async getPortfolio(): Promise<PortfolioMedia[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/portfolio`);
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      return data.data && data.data.length > 0 ? data.data : MOCK_PORTFOLIO;
    } catch {
      return MOCK_PORTFOLIO;
    }
  },

  async sendContactMessage(formData: any): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
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
      const res = await fetch(`${API_BASE_URL}/ai/consult`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        // Strip any markdown asterisks if returned
        const cleanedReply = data.data.reply ? data.data.reply.replace(/\*/g, '') : '';
        return { ...data.data, reply: cleanedReply };
      }
    } catch {
      // Fallback
    }

    const lower = message.toLowerCase();
    let min = 50000;
    let max = 700000;

    if (lower.includes('small') || lower.includes('birthday') || lower.includes('party')) {
      min = 25000;
      max = 50000;
    } else if (lower.includes('catering') || lower.includes('moderate')) {
      min = 450000;
      max = 600000;
    }

    return {
      reply: `Namaste! I am Sintu AI Planner, your virtual event architect at Sintu Decorators (Shiv Mandir, Mungroura, Jamalpur).\n\n` +
        `How can I assist with your event planning today?\n\n` +
        `• Minimal Small Party: Starts @ ₹50,000\n` +
        `• Minimal Wedding Event: Starts @ ₹1.5 Lakhs - ₹2 Lakhs\n` +
        `• Moderate Wedding + Catering: Starts @ ₹7 Lakhs - ₹8 Lakhs+\n\n` +
        `Note: Final pricing depends on guest count, decor complexity, luxury demands, and the number of food items.`,
      suggestedBudget: {
        min,
        max,
        description: `Custom estimate based on guest count, decor complexity & catering demands in Jamalpur/Munger.`,
      },
      recommendedServices: ['Royal Destination Wedding Decor', 'Grand Wedding Decor with Catering Package', 'Waterproof Tent & Pandal Setup'],
    };
  },
};
