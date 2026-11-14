export interface Cause {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  beneficiaries?: string;
  location?: string;
  impactHighlights?: string[];
  goal?: number;
  raised?: number;
  progressPercent?: number;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  location: string;
  date?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  author?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
