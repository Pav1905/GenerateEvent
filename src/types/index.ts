export interface EventDetails {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  bannerImage: string;
  galleryImages: string[];
  organizer: string;
  contactEmail: string;
  contactPhone: string;
  rsvpEnabled: boolean;
  rsvpDeadline: string;
}

export interface ThemeSettings {
  template: 'wedding' | 'corporate' | 'birthday' | 'conference';
  preset: 'elegant' | 'minimal' | 'vibrant' | 'custom';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontHeading: string;
  fontBody: string;
  darkMode: boolean;
  layout: 'classic' | 'modern' | 'minimal';
}

export type EventType = 'wedding' | 'corporate' | 'birthday' | 'conference';

export interface Template {
  id: string;
  name: string;
  type: EventType;
  thumbnail: string;
  description: string;
  sampleDescription?: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontHeading: string;
  fontBody: string;
  layout: 'classic' | 'modern' | 'minimal';
}