import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Sintu Decorators database...');

  // Clean existing tables
  await prisma.contactMessage.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.portfolioItem.deleteMany();
  await prisma.service.deleteMany();
  await prisma.category.deleteMany();
  await prisma.aIPromptTemplate.deleteMany();
  await prisma.setting.deleteMany();
  await prisma.admin.deleteMany();

  // 1. Create Admin
  const passwordHash = await bcrypt.hash('admin123', 10);
  await prisma.admin.create({
    data: {
      email: 'admin@sintudecorators.com',
      name: 'Sintu Kumar (Owner)',
      passwordHash,
      role: 'ADMIN',
    },
  });

  // 2. Create Categories
  const weddingCat = await prisma.category.create({
    data: { name: 'Wedding & Mandap', slug: 'wedding' },
  });
  const tentCat = await prisma.category.create({
    data: { name: 'Tent House & Infrastructure', slug: 'tent-house' },
  });
  const flowerCat = await prisma.category.create({
    data: { name: 'Flower Decoration', slug: 'flower-decor' },
  });
  const birthdayCat = await prisma.category.create({
    data: { name: 'Birthday & Anniversary', slug: 'birthday-anniversary' },
  });
  const stageCat = await prisma.category.create({
    data: { name: 'Stage & Reception', slug: 'stage-reception' },
  });
  const cateringCat = await prisma.category.create({
    data: { name: 'Catering & Hospitality', slug: 'catering-services' },
  });

  // 3. Create Services
  const servicesData = [
    {
      title: 'Royal Destination Wedding Decor',
      slug: 'royal-wedding-decor',
      categoryId: weddingCat.id,
      shortDesc: 'Complete royal wedding theme setup with grand entrance gates, VIP seating, and luxurious fabric drapes.',
      fullDesc: 'Transform your special day into a regal affair near Shiv Mandir, Mungroura. We specialize in traditional Bihari royal mandaps, grand floral pathways, crystal chandelier suspensions, and custom thematic entrances tailored for grand wedding grounds in Jamalpur and Munger.',
      priceStarting: 150000, // 1.5 Lakhs starting minimal wedding
      features: JSON.stringify(['Custom Royal Mandap Design', 'Grand Entrance Arch with Fresh Flowers', 'VIP Sofa & Guest Seating Setup', 'Ambient LED & Chandelier Lighting', 'Varmala Stage & Revolving Stage options']),
      imageUrl: '/royal_mandap.jpg',
      isFeatured: true,
    },
    {
      title: 'Grand Wedding Decor with Catering Package',
      slug: 'grand-wedding-catering',
      categoryId: cateringCat.id,
      shortDesc: 'All-inclusive luxury wedding decor, German hanger pandal, and multi-cuisine catering counter setup.',
      fullDesc: 'Complete end-to-end wedding experience across Jamalpur and Munger. Includes grand floral mandap, waterproof German structure tent, cold pyro entrance, and comprehensive multi-course buffet catering with royal hospitality staff.',
      priceStarting: 700000, // 7 Lakhs starting moderate/grand wedding with catering
      features: JSON.stringify(['German Structure Pandal for Large Gatherings', 'Exotic Floral Mandap & Pathway', 'Multi-Course Gourmet Catering Counters', 'Luxury Crockery & Uniformed Staff', 'Custom Menu Items Tailored to Guest Count']),
      imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      isFeatured: true,
    },
    {
      title: 'Waterproof Tent & Pandal Setup',
      slug: 'waterproof-tent-setup',
      categoryId: tentCat.id,
      shortDesc: 'Heavy-duty weatherproof waterproof pandals with German hanger structures for gatherings of any size.',
      fullDesc: 'Our premium tent house infrastructure provides robust weather protection with flame-retardant and waterproof drapes, raised wooden flooring, carpet layering, and heavy trussing for gatherings across Munger district.',
      priceStarting: 50000, // 50k starting minimal
      features: JSON.stringify(['High-Peak Waterproof Tents', 'German Structure Pandal Options', 'Red Carpet & Plush Flooring', 'Air Cooling / Fan Systems', 'Weather Resilience Guaranteed']),
      imageUrl: '/german_pandal.jpg',
      isFeatured: true,
    },
    {
      title: 'Exotic Fresh Floral & Haldi Swing Styling',
      slug: 'exotic-flower-decor',
      categoryId: flowerCat.id,
      shortDesc: 'Orchids, Roses, Carnations, and Marigold flower swings for Mandap, Car, and Haldi ceremonies.',
      fullDesc: 'Freshly sourced premium flowers crafted by expert artisans near Shiv Mandir, Mungroura. We create breathtaking Haldi/Mehendi marigold swings, floral curtains, fragrance arches, and decorated bridal cars.',
      priceStarting: 50000, // 50k starting
      features: JSON.stringify(['Fresh Exotic Flower Import', 'Haldi/Mehendi Marigold Swing Backdrop', 'Bridal Entrance Floral Umbrella', 'Scented Varmala Garland Crafting', 'Car & Room Floral Decoration']),
      imageUrl: '/haldi_swing.jpg',
      isFeatured: true,
    },
    {
      title: 'Minimal Private Event Decoration',
      slug: 'minimal-private-event',
      categoryId: birthdayCat.id,
      shortDesc: 'Minimal party decor with customized backdrops, balloon arches, LED lighting, and cake table framing.',
      fullDesc: 'Tailored for small private functions, birthdays, and anniversary celebrations in Jamalpur and Munger. Includes balloon sculptures, acrylic LED cutouts, and cake table framing.',
      priceStarting: 50000, // 50k minimal
      features: JSON.stringify(['Custom Balloon Sculptures & Arches', 'Personalized Acrylic LED Name Cutouts', 'Cake Table Framing & Lighting', 'Photo Booth Prop Corners']),
      imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
      isFeatured: false,
    },
  ];

  for (const s of servicesData) {
    await prisma.service.create({ data: s });
  }

  // 4. Create Portfolio Items
  const portfolioData = [
    {
      title: 'Grand Royal Mandap - Bari Daryapur Wedding',
      categoryId: weddingCat.id,
      mediaType: 'IMAGE',
      mediaUrl: '/royal_mandap.jpg',
      description: 'A breathtaking 4-pillar floral mandap with gold drapes and crystal chandeliers near Shiv Mandir, Mungroura.',
      location: 'Bari Daryapur, Jamalpur',
      isFeatured: true,
    },
    {
      title: 'Varmala Stage & Haldi Marigold Swing',
      categoryId: flowerCat.id,
      mediaType: 'IMAGE',
      mediaUrl: '/haldi_swing.jpg',
      description: 'Vibrant Haldi ceremony arrangement with fresh marigold floral swings and brass urli water bowls.',
      location: 'Mungroura, Jamalpur',
      isFeatured: true,
    },
    {
      title: 'German Structure Waterproof Pandal',
      categoryId: tentCat.id,
      mediaType: 'IMAGE',
      mediaUrl: '/german_pandal.jpg',
      description: 'High-peak waterproof tent house setup with carpet flooring and sharpie laser illuminations for 3000 guests.',
      location: 'Munger Town Hall Grounds',
      isFeatured: true,
    },
  ];

  for (const p of portfolioData) {
    await prisma.portfolioItem.create({ data: p });
  }

  // 5. Create Testimonials
  const testimonials = [
    {
      clientName: 'Rajesh & Priti Sharma',
      location: 'Jamalpur, Munger',
      rating: 5,
      comment: 'Sintu Decorators turned our wedding into an absolute fairytale near Shiv Mandir! The flower mandap and lighting exceeded our wildest expectations.',
      eventType: 'Wedding & Reception',
      eventDate: 'Nov 2025',
      isApproved: true,
    },
    {
      clientName: 'Amitabh Kumar Roy',
      location: 'Bari Daryapur, Jamalpur',
      rating: 5,
      comment: 'Extremely professional tent house setup. Even during unexpected rain, the waterproof pandal stayed perfectly dry and safe. Sintu ji is very cooperative.',
      eventType: 'Sister Wedding',
      eventDate: 'Dec 2025',
      isApproved: true,
    },
    {
      clientName: 'Sunita & Vikram Singh',
      location: 'Mungroura, Jamalpur',
      rating: 5,
      comment: 'We booked them for our son’s 1st birthday theme decoration. The balloon arch and cake table backdrop were stunning. All guests were impressed!',
      eventType: 'Birthday Party',
      eventDate: 'Jan 2026',
      isApproved: true,
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }

  // 6. Site Settings
  const settings = [
    { key: 'site_name', value: 'Sintu Decorators' },
    { key: 'tagline', value: 'Creating Royal Celebrations & Timeless Memories' },
    { key: 'phone', value: '+91 94312 00000' },
    { key: 'whatsapp', value: '919431200000' },
    { key: 'email', value: 'info@sintudecorators.com' },
    { key: 'address', value: 'Near Shiv Mandir, Mungroura, Jamalpur, Munger, Bihar 811214, India' },
    { key: 'operating_hours', value: 'Mon - Sun: 8:00 AM - 10:00 PM' },
    { key: 'experience_years', value: '15+' },
    { key: 'events_completed', value: '1200+' },
  ];

  for (const st of settings) {
    await prisma.setting.create({ data: st });
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
