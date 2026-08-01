export interface AIPlannerRequest {
  message: string;
  history?: { role: 'user' | 'assistant'; content: string }[];
  provider?: 'mock' | 'openai' | 'gemini';
  context?: {
    eventType?: string;
    guestCount?: number;
    budgetRange?: string;
    location?: string;
  };
}

export class AIProviderService {
  /**
   * Processes AI consultation prompt and generates a structured response.
   */
  static async generateConsultation(req: AIPlannerRequest): Promise<{
    reply: string;
    suggestedBudget?: { min: number; max: number; description: string };
    recommendedServices?: string[];
  }> {
    const prompt = req.message.toLowerCase();

    // 1. Budget Estimation Query Handler
    if (prompt.includes('budget') || prompt.includes('cost') || prompt.includes('price') || prompt.includes('rate')) {
      const guestMatch = prompt.match(/(\d+)\s*(guest|people|person|pax)/i);
      const guestCount = guestMatch ? parseInt(guestMatch[1], 10) : req.context?.guestCount || 300;

      let minCost = 100000;
      let maxCost = 600000;

      if (guestCount <= 150) {
        minCost = 25000;
        maxCost = 150000;
      } else if (guestCount <= 400) {
        minCost = 100000;
        maxCost = 350000;
      } else {
        minCost = 450000;
        maxCost = 1200000;
      }

      return {
        reply: `✨ **Sintu AI Event & Budget Breakdown (~${guestCount} Guests in Jamalpur/Munger):**\n\n` +
          `Pricing at Sintu Decorators starts at:\n` +
          `• **Minimal Small Parties:** ₹25,000 - ₹35,000\n` +
          `• **Minimal Wedding Mandap & Tent:** ₹1 Lakh - ₹1.5 Lakhs\n` +
          `• **Moderate Wedding Pandal with Catering:** ₹4.5 Lakhs - ₹6 Lakhs\n` +
          `• **Ultra Luxury Destination Wedding:** ₹12 Lakhs - ₹25 Lakhs+\n\n` +
          `📌 *Note: Final pricing depends directly on guest count, decor complexity, luxury demands, and number of catering menu dishes.*`,
        suggestedBudget: {
          min: minCost,
          max: maxCost,
          description: `Custom estimate for ${guestCount} guests in Jamalpur/Munger based on decor complexity & catering items`,
        },
        recommendedServices: ['Royal Destination Wedding Decor', 'Waterproof Tent & Pandal Setup', 'Exotic Fresh Floral & Haldi Swing Styling'],
      };
    }

    // 2. Fresh Flowers vs Artificial Fabric
    if (prompt.includes('flower') || prompt.includes('mandap') || prompt.includes('theme') || prompt.includes('haldi')) {
      return {
        reply: `🌸 **Sintu Decorators Floral & Mandap Recommendation:**\n\n` +
          `1. **Fresh Exotic Flowers (Orchids, Roses, Carnations, Rajnigandha):** Best for Haldi, Mehendi, and Grand Entrance Arches. Gives a natural fragrance and premium luxury aesthetic.\n` +
          `2. **Velvet Drapery & Fiber Pillars:** Excellent for evening night receptions, providing deep rich colors under LED spotlights.\n` +
          `3. **Hybrid Setup (Recommended):** Combine fresh imported flowers for high-touch areas (Mandap & Entrance) with velvet drapes for side panelling for optimal budget efficiency!`,
        recommendedServices: ['Exotic Fresh Floral & Haldi Swing Styling', '3D Stage & Reception Mandap'],
      };
    }

    // 3. Waterproof Pandal & Weather Query
    if (prompt.includes('rain') || prompt.includes('tent') || prompt.includes('waterproof') || prompt.includes('pandal')) {
      return {
        reply: `🎪 **Weatherproof Tent House Infrastructure:**\n\n` +
          `At Sintu Decorators, we utilize high-peak German hanger structures and triple-ply waterproof vinyl pandals. Features include:\n` +
          `• Heavy-duty platform carpeting to prevent rainwater seepage\n` +
          `• Heavy aluminum/steel truss framing built for high winds in open grounds\n` +
          `• Integrated ventilation and air-cooling systems`,
        recommendedServices: ['Waterproof Tent & Pandal Setup'],
      };
    }

    // 4. Default AI Consultation Response
    return {
      reply: `Namaste! I am **Sintu AI Planner**, your virtual event architect at Sintu Decorators (Shiv Mandir, Mungroura, Jamalpur).\n\n` +
        `I can help you:\n` +
        `1. Calculate custom decor & catering budgets for Jamalpur & Munger events (minimal parties starting ₹25k, minimal weddings from ₹1L-₹1.5L, moderate weddings with catering from ₹4.5L-₹6L, ultra luxury from ₹12L-₹25L+).\n` +
        `2. Select themes (Royal Traditional, Haldi Marigold Swing, Golden Velvet).\n` +
        `3. Plan stage lighting, cold pyro entrances, and catering infrastructure.\n\n` +
        `How can I assist you with your upcoming event? Tell me your event type or guest count!`,
      recommendedServices: ['Royal Destination Wedding Decor', 'Exotic Fresh Floral & Haldi Swing Styling', 'Theme Birthday & Anniversary Parties'],
    };
  }
}
