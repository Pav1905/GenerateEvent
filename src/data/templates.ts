import { Template, ThemePreset } from '../types';

export const templates: Template[] = [
  {
    id: 'wedding-elegant',
    name: 'Elegant Wedding',
    type: 'wedding',
    thumbnail: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A beautiful, elegant wedding template with soft colors and romantic design.',
    sampleDescription: 'Join us for an enchanting evening as we celebrate our love and commitment. Our wedding will be a magical celebration filled with joy, laughter, and cherished moments shared with our dearest family and friends.'
  },
  {
    id: 'corporate-modern',
    name: 'Modern Corporate',
    type: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Professional corporate template ideal for business events and conferences.',
    sampleDescription: 'Join industry leaders and innovators at our premier business conference. Network with professionals, gain valuable insights, and explore the latest trends shaping our industry.'
  },
  {
    id: 'birthday-fun',
    name: 'Fun Birthday',
    type: 'birthday',
    thumbnail: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Colorful and playful design perfect for birthday celebrations.',
    sampleDescription: "Let's celebrate! Join us for an unforgettable birthday bash filled with fun, food, and fantastic memories. Bring your party spirit and help us make this day truly special!"
  },
  {
    id: 'conference-tech',
    name: 'Tech Conference',
    type: 'conference',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern, tech-focused design for professional conferences and meetups.',
    sampleDescription: 'Experience the future of technology at our cutting-edge conference. Engage with expert speakers, participate in hands-on workshops, and discover breakthrough innovations.'
  }
];

export const themePresets: ThemePreset[] = [
  {
    id: 'elegant',
    name: 'Elegant',
    primaryColor: '#2D3748',
    secondaryColor: '#718096',
    accentColor: '#9F7AEA',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
    layout: 'classic'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    primaryColor: '#1A202C',
    secondaryColor: '#4A5568',
    accentColor: '#667EEA',
    fontHeading: 'Montserrat',
    fontBody: 'Inter',
    layout: 'minimal'
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    primaryColor: '#7C3AED',
    secondaryColor: '#0D9488',
    accentColor: '#EC4899',
    fontHeading: 'Montserrat',
    fontBody: 'Inter',
    layout: 'modern'
  }
];

export const defaultEventDetails = {
  title: 'My Amazing Event',
  date: '',
  time: '18:00',
  venue: 'Beautiful Venue',
  address: '123 Event Street, City',
  description: 'Join us for an unforgettable experience!',
  bannerImage: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  galleryImages: [
    'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ],
  organizer: 'Event Planning Team',
  contactEmail: 'contact@event.com',
  contactPhone: '(555) 123-4567',
  rsvpEnabled: true,
  rsvpDeadline: ''
};

export const defaultThemeSettings = {
  template: 'wedding' as const,
  preset: 'elegant' as const,
  primaryColor: '#7C3AED',
  secondaryColor: '#0D9488',
  accentColor: '#EC4899',
  fontHeading: 'Montserrat',
  fontBody: 'Inter',
  darkMode: false,
  layout: 'classic' as const
};

export const fonts = [
  { name: 'Inter', value: 'Inter' },
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Playfair Display', value: 'Playfair Display' },
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Open Sans', value: 'Open Sans' }
];

export const colorOptions = [
  { name: 'Purple', value: '#7C3AED' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Teal', value: '#0D9488' },
  { name: 'Green', value: '#10B981' },
  { name: 'Yellow', value: '#F59E0B' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Gray', value: '#6B7280' }
];