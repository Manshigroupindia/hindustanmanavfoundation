import { Cause, EventItem, Testimonial, BlogPost, TeamMember, GalleryItem } from '../types';

export const NGO_DETAILS = {
  name: 'HINDUSTAN MANAV FOUNDATION',
  shortName: 'HMF',
  tagline: 'Your contribution can help a solution.',
  email: 'Hindustanmanav@gmail.com',
  phone: '+91 8457981777',
  displayPhone: '+91 8457981777',
  address: 'New Delhi, India',
  fullAddress: 'Hindustan Manav Foundation, Community Welfare Center, New Delhi, India',
  bank: {
    accountName: 'HINDUSTAN MANAV FOUNDATION',
    accountNumber: '926010049604621',
    ifscCode: 'UTIB0000678',
    bankName: 'Axis Bank',
    branch: 'New Delhi',
    accountType: 'Current / NGO Welfare Account'
  },
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    pinterest: 'https://pinterest.com'
  }
};

export const HERO_SLIDES = [
  {
    id: 1,
    subheading: 'Join Us Today',
    heading: 'Give a Little. Change a Lot.',
    paragraph: 'Hindustan Manav Foundation is committed to uplifting underprivileged families through primary education, essential healthcare, and community welfare programs across India.',
    image: '/assets/img/slider-1.jpg',
    btn1Text: 'Join With Us',
    btn1Link: '/volunteers',
    btn2Text: 'Donate Now',
    btn2Action: 'donate'
  },
  {
    id: 2,
    subheading: 'Together for Humanity',
    heading: 'Together We Can Make a Difference',
    paragraph: 'Every small act of kindness builds a stronger community. Join our dedicated volunteers to create meaningful and lasting change in the lives of those in need.',
    image: '/assets/img/slider-2.jpg',
    btn1Text: 'Our Mission',
    btn1Link: '/about',
    btn2Text: 'Donate Now',
    btn2Action: 'donate'
  },
  {
    id: 3,
    subheading: 'Social Welfare & Support',
    heading: 'Building a Better Life for All',
    paragraph: 'Empowering children with education, women with vocational skills, and families with nutrition and health support to foster dignified and resilient lives.',
    image: '/assets/img/slider-3.jpg',
    btn1Text: 'Explore Causes',
    btn1Link: '/causes',
    btn2Text: 'Donate Now',
    btn2Action: 'donate'
  }
];

export const PROMO_ITEMS = [
  {
    id: 1,
    icon: '/assets/img/icon-1.png',
    title: 'Make Donation',
    description: 'Direct bank transfers directly support school supplies, health checkup camps, and community nutrition for families in need.',
    link: '/donate'
  },
  {
    id: 2,
    icon: '/assets/img/icon-2.png',
    title: 'Welfare Campaigns',
    description: 'We run focused grassroots campaigns across rural and slum clusters to address foundational education, hygiene, and nutrition gaps.',
    link: '/causes'
  },
  {
    id: 3,
    icon: '/assets/img/icon-3.png',
    title: 'Become A Volunteer',
    description: 'Lend your time, skills, and compassion. Be the driving force that brings smiles, education, and hope to local communities.',
    link: '/volunteers'
  }
];

export const CAUSES_DATA: Cause[] = [
  {
    id: 'cause-1',
    title: 'Education for Every Underprivileged Child',
    description: 'Providing free school stationery, textbooks, and quality remedial tutoring to ensure children from underprivileged backgrounds stay in school.',
    longDescription: 'Education is the cornerstone of sustainable human dignity and progress. Hindustan Manav Foundation provides comprehensive educational support to children from low-income families in suburban and rural clusters. Our initiative supplies textbooks, notebooks, school bags, and uniforms, alongside running after-school study centers led by dedicated volunteer educators. Through regular monitoring and parent counseling, we work to reduce dropout rates and ensure every child is equipped to pursue higher learning and meaningful life opportunities.',
    image: '/assets/img/causes-1.jpg',
    category: 'Education',
    beneficiaries: 'Over 1,200 Children Supported Annually',
    location: 'Delhi NCR & Rural Communities',
    impactHighlights: [
      'Free distribution of complete school study kits and notebooks',
      'Daily remedial classes to bridge learning gaps for primary students',
      'Special focus on encouraging and sustaining girl-child school enrollment',
      'Regular academic counseling and parent-teacher awareness meetings'
    ]
  },
  {
    id: 'cause-2',
    title: 'Women Empowerment & Vocational Skill Training',
    description: 'Organizing tailoring, handicrafts, and digital literacy workshops to enable women to become financially independent and self-reliant.',
    longDescription: 'When women are economically empowered, entire families prosper. Hindustan Manav Foundation conducts free vocational training workshops for women from economically weaker sections. Courses include professional tailoring, embroidery, handcrafting, basic accounting, and digital literacy. We also facilitate the creation of self-help peer groups, enabling participants to earn dignified livelihoods from home and actively contribute to their household welfare and children’s education.',
    image: '/assets/img/causes-2.jpg',
    category: 'Women Empowerment',
    beneficiaries: '350+ Women Enrolled in Skill Centers',
    location: 'Urban Slum & Semi-Rural Clusters',
    impactHighlights: [
      'Hands-on training in sewing, garment design, and artisan crafts',
      'Financial literacy, savings awareness, and digital payment training',
      'Mentorship for launching home-based micro-enterprises and cooperatives',
      'Safe, supportive community learning spaces for young women and mothers'
    ]
  },
  {
    id: 'cause-3',
    title: 'Community Healthcare & Free Medical Camps',
    description: 'Conducting periodic health check-ups, eye screenings, and distributing essential medicines to vulnerable community members.',
    longDescription: 'Access to basic healthcare remains a significant hurdle for marginalized families. Hindustan Manav Foundation collaborates with volunteer doctors, nurses, and medical professionals to organize free medical check-up camps in underserved areas. Our camps provide general physical examinations, pediatric assessments, eye check-ups, blood sugar and pressure screenings, hygiene counseling, and free essential prescription medications.',
    image: '/assets/img/causes-3.jpg',
    category: 'Healthcare',
    beneficiaries: '4,000+ Patients Examined & Assisted',
    location: 'Rural Villages & High-Density Settlements',
    impactHighlights: [
      'Comprehensive doctor consultations and vital health screenings',
      'Free distribution of prescribed generic medicines and supplements',
      'Preventive health education, personal hygiene, and sanitation drives',
      'Special pediatric health assessments and maternal care counseling'
    ]
  },
  {
    id: 'cause-4',
    title: 'Child Nutrition & Food Distribution Drive',
    description: 'Distributing wholesome meals, iron-rich supplements, and dry ration kits to combat child malnutrition and hunger.',
    longDescription: 'Adequate nutrition during childhood is crucial for cognitive development, immune strength, and school performance. Through our Nutrition & Food Security Drive, Hindustan Manav Foundation provides balanced daily meals, nutritious porridge, and seasonal fruits to young children in slum settlements. During severe monsoon and winter seasons, we also distribute monthly dry ration kits (containing grains, pulses, oil, and lentils) to destitute families.',
    image: '/assets/img/slider-1.jpg',
    category: 'Nutrition & Hunger',
    beneficiaries: 'Thousands of Nutritious Meals Distributed',
    location: 'Community Welfare Centers & Outposts',
    impactHighlights: [
      'Freshly cooked hot nutritious meals distributed directly to children',
      'Regular tracking of children’s height, weight, and nutritional progress',
      'Emergency ration kits distributed to single-mother and disabled households',
      'Nutrition counseling sessions for mothers on cost-effective healthy cooking'
    ]
  },
  {
    id: 'cause-5',
    title: 'Rural Community Development & Clean Drinking Water',
    description: 'Installing clean drinking water filtration points, community hand pumps, and conducting sanitation and hygiene workshops.',
    longDescription: 'Water-borne diseases are among the leading causes of preventable illness and absenteeism in rural and peri-urban settlements. Hindustan Manav Foundation partners with village elders and grassroots volunteers to install clean water filtration stations and repair malfunctioning hand pumps. We also conduct extensive community hygiene drives to promote proper water storage and handwashing practices.',
    image: '/assets/img/causes-3.jpg',
    category: 'Rural Development',
    beneficiaries: 'Multiple Villages & Suburban Hamlets',
    location: 'Rural Outskirts & Village Blocks',
    impactHighlights: [
      'Installation and maintenance of community water filtration systems',
      'Restoration of neglected village tube wells and drinking water points',
      'Sanitation awareness campaigns covering waste disposal and safe hygiene',
      'Training local youth committees to oversee water point maintenance'
    ]
  },
  {
    id: 'cause-6',
    title: 'Child Welfare & Protection of Destitute Youth',
    description: 'Safeguarding vulnerable, runaway, and orphaned children by providing safe shelter assistance, counseling, and school reintegration.',
    longDescription: 'Every child deserves safety, protection, and a caring environment free from neglect and abuse. Hindustan Manav Foundation operates community watch programs to identify children at risk of child labor or homelessness. In partnership with child welfare committees, we assist in providing emergency clothing, counseling, non-formal foundational schooling, and legal documentation support to reintegrate children into mainstream schools.',
    image: '/assets/img/slider-2.jpg',
    category: 'Child Welfare',
    beneficiaries: 'Hundreds of Children Sheltered & Guided',
    location: 'Transit Centers & Community Shelters',
    impactHighlights: [
      'Immediate emergency relief: clean clothes, hygiene kits, and counseling',
      'Reintegration into formal academic schools and vocational training institutes',
      'Psychological counseling and emotional wellness support',
      'Advocacy against child labor and exploitation in suburban markets'
    ]
  },
  {
    id: 'cause-7',
    title: 'Environmental Protection & Clean Green India Initiative',
    description: 'Tree plantation campaigns, plastic cleanup drives, and community-led environmental stewardship workshops.',
    longDescription: 'A healthy natural environment is essential for the long-term well-being of all humanity. Hindustan Manav Foundation actively leads tree plantation drives in open public spaces, school campuses, and community grounds. We conduct plastic-collection drives, promote the use of cloth bags, and educate youth on water conservation and sustainable waste segregation.',
    image: '/assets/img/events-2.jpg',
    category: 'Environment',
    beneficiaries: 'Dozens of Green Zones & Schools Covered',
    location: 'Public Grounds, Schools & Neighborhoods',
    impactHighlights: [
      'Native sapling plantation drives with long-term sapling maintenance',
      'Neighborhood cleanliness, dry/wet waste segregation, and recycling campaigns',
      'Eco-clubs in local learning centers to foster environmental awareness',
      'Promoting biodegradable cloth bags made by women in our skill centers'
    ]
  },
  {
    id: 'cause-8',
    title: 'Support for Underprivileged Families & Winter Relief',
    description: 'Providing warm blankets, winter apparel, tarpaulins, and emergency aid to homeless and daily-wage earner families.',
    longDescription: 'During severe North Indian winter months, temperatures drop drastically, placing homeless individuals, rickshaw pullers, and daily-wage families living in temporary shelters in extreme danger. Hindustan Manav Foundation conducts midnight blanket and winter clothing distribution drives across railway stations, bus terminals, and homeless night shelters, delivering direct life-saving warmth and dignity.',
    image: '/assets/img/slider-3.jpg',
    category: 'Community Relief',
    beneficiaries: '2,500+ Blankets & Winter Kits Distributed',
    location: 'High-Need Urban & Peri-Urban Locations',
    impactHighlights: [
      'High-quality warm wool blankets distributed directly to people on the streets',
      'Warm clothing, sweaters, and socks for children and senior citizens',
      'Emergency dry food supplies and hot tea distribution during cold waves',
      'Coordination with local welfare shelters for overnight safe lodging'
    ]
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'event-1',
    title: 'Free Community Health & Pediatric Checkup Camp',
    description: 'Offering free consultations with specialist doctors, pediatric health screening, eye checkups, and distribution of essential prescription medicines for underprivileged families.',
    image: '/assets/img/events-1.jpg',
    time: '09:00 AM - 04:00 PM',
    location: 'Community Welfare Center, New Delhi',
    date: 'March 25, 2026',
    badge: 'Medical Camp'
  },
  {
    id: 'event-2',
    title: 'Clean Drinking Water & Sanitation Awareness Drive',
    description: 'Inauguration of two community filtration points alongside interactive community hygiene workshops demonstrating water purification and disease prevention methods.',
    image: '/assets/img/events-2.jpg',
    time: '10:00 AM - 02:30 PM',
    location: 'Rural Outpost, Delhi NCR Block',
    date: 'April 10, 2026',
    badge: 'Clean Water'
  },
  {
    id: 'event-3',
    title: 'Children Stationery & School Kit Distribution',
    description: 'Annual educational support drive providing school bags, notebooks, geometry boxes, and textbooks to over 500 children from low-income families preparing for the new academic session.',
    image: '/assets/img/events-3.jpg',
    time: '11:00 AM - 03:00 PM',
    location: 'Central Public Hall, New Delhi',
    date: 'April 28, 2026',
    badge: 'Education'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    quote: 'The dedication of Hindustan Manav Foundation towards rural children is truly inspiring. Seeing children who never held a book now reading fluently brings immense joy.',
    name: 'Dr. Arvind Joshi',
    role: 'Senior Medical Volunteer & Advisor',
    image: '/assets/img/team-1.jpg'
  },
  {
    id: 'testi-2',
    quote: 'Volunteering with the HMF team has shown me how direct grassroots action can transform underprivileged communities. Transparent, honest, and deeply compassionate work.',
    name: 'Sunita Sharma',
    role: 'Social Worker & Literacy Educator',
    image: '/assets/img/team-2.jpg'
  },
  {
    id: 'testi-3',
    quote: 'Hindustan Manav Foundation has provided our local women with vocational tailoring skills, giving them financial independence and self-confidence to support their children.',
    name: 'Priya Nair',
    role: 'Women Livelihood Coordinator',
    image: '/assets/img/team-3.jpg'
  },
  {
    id: 'testi-4',
    quote: 'During harsh winter seasons, their immediate blanket and relief kit distributions save lives on the streets. Their commitment to human dignity is exceptional.',
    name: 'Rajesh Verma',
    role: 'Community Relief Volunteer',
    image: '/assets/img/team-4.jpg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'empowering-children-through-education',
    title: 'Empowering Underprivileged Children Through Quality Education',
    excerpt: 'How foundational literacy, volunteer tutoring, and basic learning supplies are breaking cycles of poverty in rural and semi-urban communities.',
    content: 'Education is the greatest equalizer in society. At Hindustan Manav Foundation, we believe that no child should ever be deprived of learning because of financial hardship. Our dedicated volunteer teachers run remedial classes, distribute textbooks and school uniforms, and counsel parents on the importance of uninterrupted schooling. Through collective community support, we are opening doors of opportunity for hundreds of promising young minds.',
    date: 'February 12, 2026',
    image: '/assets/img/home-blog-1.jpg',
    author: 'Hindustan Manav Foundation'
  },
  {
    id: 'strengthening-rural-healthcare-access',
    title: 'Strengthening Grassroots Healthcare in Underserved Neighborhoods',
    excerpt: 'Bridging the healthcare gap through mobile health camps, preventative care workshops, and free generic medicine distributions.',
    content: 'Vulnerable families in low-income settlements often delay medical care due to prohibitive costs and lack of nearby clinics. Hindustan Manav Foundation regularly organizes free healthcare camps equipped with diagnostic tests, doctor consultations, and essential medications. Early detection of illnesses and guidance on preventive hygiene have helped thousands of community members lead healthier lives.',
    date: 'February 20, 2026',
    image: '/assets/img/home-blog-2.jpg',
    author: 'Hindustan Manav Foundation'
  },
  {
    id: 'the-spirit-of-selfless-giving',
    title: 'The Transformative Power of Community Volunteerism',
    excerpt: 'How passionate young volunteers are creating sustainable social impact across Indian cities and rural villages.',
    content: 'True happiness is discovered in the service of others. When individuals come together with a common goal to feed the hungry, clothe the vulnerable, and teach the young, societies become more compassionate and resilient. Hindustan Manav Foundation welcomes volunteers from all walks of life to experience the deep fulfillment of direct social service.',
    date: 'March 01, 2026',
    image: '/assets/img/home-blog-3.jpg',
    author: 'Hindustan Manav Foundation'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Ramesh Chandra',
    role: 'Founder & Welfare Trustee',
    image: '/assets/img/profile.jpg',
    bio: 'Guiding Hindustan Manav Foundation with over two decades of dedicated grassroots social service, human welfare initiatives, and community development.'
  },
  {
    id: 'team-2',
    name: 'Vikram Patel',
    role: 'Rural Outreach & Field Coordinator',
    image: '/assets/img/team-1.jpg',
    bio: 'Oversees on-ground logistics, village outreach programs, and relief material distribution across underserved communities.'
  },
  {
    id: 'team-3',
    name: 'Sunita Sharma',
    role: 'Education & Child Literacy Lead',
    image: '/assets/img/team-2.jpg',
    bio: 'Passionate educationist designing remedial learning modules, organizing study camps, and training volunteer teachers.'
  },
  {
    id: 'team-4',
    name: 'Priya Nair',
    role: 'Women Empowerment & Skill Lead',
    image: '/assets/img/team-3.jpg',
    bio: 'Leads vocational training centers, artisan workshops, and self-reliance programs for women from low-income households.'
  },
  {
    id: 'team-5',
    name: 'Rajesh Verma',
    role: 'Youth Volunteers & Health Camp Lead',
    image: '/assets/img/team-4.jpg',
    bio: 'Coordinates medical check-up camps, youth volunteer recruitment, and emergency winter relief distributions.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Community Welfare Gathering',
    category: 'Welfare',
    image: '/assets/img/slider-1.jpg'
  },
  {
    id: 'g-2',
    title: 'Children Learning Center',
    category: 'Education',
    image: '/assets/img/causes-2.jpg'
  },
  {
    id: 'g-3',
    title: 'Classroom Study Session',
    category: 'Education',
    image: '/assets/img/slider-3.jpg'
  },
  {
    id: 'g-4',
    title: 'Nutritious Meals Distribution',
    category: 'Nutrition',
    image: '/assets/img/events-1.jpg'
  },
  {
    id: 'g-5',
    title: 'Women Skill Workshop',
    category: 'Empowerment',
    image: '/assets/img/events-3.jpg'
  },
  {
    id: 'g-6',
    title: 'Rural Health Checkup Camp',
    category: 'Healthcare',
    image: '/assets/img/slider-2.jpg'
  }
];

export const SPONSORS = [
  { id: 1, image: '/assets/img/sponsor-1.png', alt: 'Community Partner' },
  { id: 2, image: '/assets/img/sponsor-2.png', alt: 'Welfare Ally' },
  { id: 3, image: '/assets/img/sponsor-3.png', alt: 'Health Outreach' },
  { id: 4, image: '/assets/img/sponsor-4.png', alt: 'Education Supporter' },
  { id: 5, image: '/assets/img/sponsor-5.png', alt: 'Social Foundation' },
  { id: 6, image: '/assets/img/sponsor-6.png', alt: 'Care Network' },
  { id: 7, image: '/assets/img/sponsor-7.png', alt: 'Community Trust' },
  { id: 8, image: '/assets/img/sponsor-8.png', alt: 'Youth Alliance' }
];

export const VOLUNTEER_BENEFITS = [
  'Be an active part of transparent grassroots human welfare initiatives.',
  'Comprehensive orientation and guidance provided for all volunteer roles.',
  'Directly impact children’s education, health camps, and community nutrition.',
  'Flexible volunteer hours: participate on weekends, weekdays, or project-based.',
  'Certificate of Appreciation and community leadership experience upon service completion.'
];
