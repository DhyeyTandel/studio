import type { LucideIcon } from 'lucide-react';
import { Leaf, Sunrise, Activity, BookOpen, MessageSquare, Users, HeartPulse, ShieldCheck, Brain, Smile, TrendingUp, CalendarDays, MapPin, Mail, Phone, Clock } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  Icon?: LucideIcon;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  dataAiHint: string;
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  dataAiHint: string;
  services: string[]; // Names of services they offer
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string; 
  excerpt: string;
  content: string; 
  image: string;
  dataAiHint: string;
  category: string;
  Icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  date: string; 
  image?: string;
  dataAiHint?: string;
  rating: number; // 1-5 stars
}

export interface ClassInfo {
  id: string;
  name: string;
  description: string;
  instructor: string;
  schedule: { day: string; time: string }[];
  Icon?: LucideIcon;
  image: string;
  dataAiHint: string;
}

export const services: Service[] = [
  {
    id: 'yoga',
    slug: 'yoga',
    name: 'Yoga Therapy',
    shortDescription: 'Harmonize your mind, body, and spirit with our therapeutic yoga sessions.',
    longDescription: 'Our yoga therapy sessions are tailored to individual needs, focusing on postures (asanas), breathing techniques (pranayama), and meditation to improve physical and mental well-being. Whether you are a beginner or an experienced practitioner, our certified instructors will guide you on a journey of self-discovery and healing.',
    Icon: Sunrise,
    benefits: [
      'Improved flexibility and strength',
      'Stress reduction and mental clarity',
      'Enhanced respiratory function',
      'Better posture and body awareness',
    ],
    faqs: [
      { question: 'What should I wear?', answer: 'Comfortable, stretchy clothing that allows for a full range of motion.' },
      { question: 'Do I need my own mat?', answer: 'Mats are provided, but you are welcome to bring your own.' },
    ],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga serene',
  },
  {
    id: 'ayurveda',
    slug: 'ayurveda',
    name: 'Ayurvedic Treatments',
    shortDescription: 'Discover ancient wisdom for modern wellness through personalized Ayurvedic care.',
    longDescription: 'Ayurveda, the "science of life," is an ancient Indian system of medicine that emphasizes balance in bodily systems. Our practitioners offer consultations to determine your unique constitution (dosha) and provide personalized recommendations including diet, lifestyle adjustments, herbal remedies, and detoxification therapies (Panchakarma).',
    Icon: Leaf,
    benefits: [
      'Personalized wellness plans',
      'Natural detoxification and rejuvenation',
      'Improved digestion and metabolism',
      'Holistic approach to chronic conditions',
    ],
    faqs: [
      { question: 'What is a dosha?', answer: 'Doshas (Vata, Pitta, Kapha) are fundamental energies that govern our physical and mental processes. Understanding your unique dosha balance is key to Ayurvedic healing.' },
      { question: 'Are herbal remedies safe?', answer: 'We use high-quality, ethically sourced herbs. Our practitioners will discuss any potential interactions with your current medications.' },
    ],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ayurveda herbs',
  },
  {
    id: 'physiotherapy',
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    shortDescription: 'Restore movement and function with our expert physiotherapy services.',
    longDescription: 'Our licensed physiotherapists help people affected by injury, illness, or disability through movement and exercise, manual therapy, education, and advice. We focus on identifying the root cause of your problem to provide effective, long-lasting relief and rehabilitation.',
    Icon: Activity,
    benefits: [
      'Pain relief and management',
      'Improved mobility and range of motion',
      'Injury prevention and rehabilitation',
      'Post-operative recovery support',
    ],
    faqs: [
      { question: 'Do I need a doctor\'s referral?', answer: 'While not always necessary, a referral can be helpful. Please check with your insurance provider.' },
      { question: 'What does a typical session involve?', answer: 'An initial assessment, followed by a personalized treatment plan which may include exercises, manual therapy, and education.' },
    ],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'physiotherapy clinic',
  },
];

export const practitioners: Practitioner[] = [
  {
    id: 'dr-elara-vance',
    name: 'Dr. Elara Vance',
    title: 'Lead Naturopathic Doctor & Yoga Instructor',
    bio: 'Dr. Vance has over 15 years of experience in naturopathic medicine and is a certified RYT-500 yoga instructor. She believes in a holistic approach, integrating traditional wisdom with modern science to empower her patients towards optimal health.',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'doctor portrait',
    services: ['Yoga Therapy', 'Ayurvedic Treatments'],
  },
  {
    id: 'mr-liam-chen',
    name: 'Mr. Liam Chen',
    title: 'Senior Physiotherapist & Ayurvedic Consultant',
    bio: 'Liam is a dedicated physiotherapist with a special interest in sports injuries and chronic pain management. He also holds a diploma in Ayurvedic studies, allowing him to offer a unique blend of East-West therapeutic approaches.',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'therapist professional',
    services: ['Physiotherapy', 'Ayurvedic Treatments'],
  },
    {
    id: 'ms-anya-sharma',
    name: 'Ms. Anya Sharma',
    title: 'Yoga & Meditation Guide',
    bio: 'Anya discovered the transformative power of yoga over a decade ago and has since dedicated her life to sharing its benefits. She specializes in Hatha, Vinyasa, and Restorative yoga, creating inclusive and nurturing class environments.',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'yoga instructor',
    services: ['Yoga Therapy'],
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'unlocking-peace-mindfulness-meditation',
    title: 'Unlocking Inner Peace: A Beginner\'s Guide to Mindfulness Meditation',
    author: 'Dr. Elara Vance',
    date: '2024-07-15T10:00:00Z',
    excerpt: 'Discover the profound benefits of mindfulness meditation and learn simple techniques to incorporate this practice into your daily life for stress reduction and enhanced well-being.',
    content: '<p>Mindfulness meditation is a practice that involves focusing your attention on the present moment. It can help you become more aware of your thoughts, feelings, and bodily sensations without judgment. This practice has been shown to reduce stress, improve focus, and promote emotional regulation.</p><h3>Getting Started:</h3><ul><li>Find a quiet space where you won\'t be disturbed.</li><li>Sit in a comfortable position, either on a cushion or a chair.</li><li>Close your eyes gently or maintain a soft gaze.</li><li>Bring your attention to your breath, noticing the sensation of air entering and leaving your body.</li><li>When your mind wanders, gently guide your focus back to your breath.</li></ul><p>Start with just 5-10 minutes a day and gradually increase the duration as you feel more comfortable. Consistency is key to experiencing the benefits of mindfulness meditation.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'meditation nature',
    category: 'Mindfulness',
    Icon: Brain,
  },
  {
    id: '2',
    slug: 'ayurvedic-eating-for-your-dosha',
    title: 'Nourish Your Nature: Ayurvedic Eating for Your Dosha',
    author: 'Mr. Liam Chen',
    date: '2024-07-22T14:30:00Z',
    excerpt: 'Learn how to tailor your diet according to your unique Ayurvedic constitution (dosha) to optimize digestion, boost energy levels, and maintain overall health.',
    content: '<p>Ayurveda emphasizes the importance of a diet that aligns with your specific dosha (Vata, Pitta, or Kapha). Eating according to your dosha can help balance your body\'s energies and prevent imbalances that may lead to illness.</p><h3>General Tips:</h3><ul><li><strong>Vata:</strong> Favor warm, cooked, and grounding foods. Include healthy fats and sweet, sour, and salty tastes.</li><li><strong>Pitta:</strong> Opt for cooling, refreshing, and slightly dry foods. Emphasize sweet, bitter, and astringent tastes.</li><li><strong>Kapha:</strong> Choose light, warm, and dry foods. Focus on pungent, bitter, and astringent tastes.</li></ul><p>Consult with an Ayurvedic practitioner to determine your dosha and receive personalized dietary recommendations.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'healthy food',
    category: 'Ayurveda',
    Icon: Leaf,
  },
  {
    id: '3',
    slug: 'benefits-of-restorative-yoga',
    title: 'The Healing Power of Stillness: Benefits of Restorative Yoga',
    author: 'Ms. Anya Sharma',
    date: '2024-07-28T09:00:00Z',
    excerpt: 'Explore the gentle yet profound practice of restorative yoga, which uses props to support the body in comfortable poses, promoting deep relaxation and healing.',
    content: '<p>Restorative yoga is a passive form of yoga that allows the body to deeply relax and heal. Poses are typically held for longer periods (5-20 minutes) with the support of props like bolsters, blankets, and blocks.</p><h3>Key Benefits:</h3><ul><li>Calms the nervous system and reduces stress.</li><li>Improves sleep quality.</li><li>Enhances flexibility and releases tension.</li><li>Supports the body\'s natural healing processes.</li></ul><p>Restorative yoga is suitable for all levels and can be particularly beneficial for those recovering from illness or injury, or experiencing high levels of stress.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'yoga relaxation',
    category: 'Yoga',
    Icon: Smile,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    text: 'Aarogyadhama has been a game-changer for my well-being. The personalized Ayurvedic plan helped me manage my digestive issues, and the yoga classes are a perfect way to de-stress. Highly recommend!',
    date: '2024-06-10T00:00:00Z',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
    rating: 5,
  },
  {
    id: '2',
    name: 'John B.',
    text: 'After my knee surgery, the physiotherapy sessions with Liam were crucial for my recovery. He is knowledgeable, patient, and truly cares about his patients. I\'m back to my active lifestyle thanks to him.',
    date: '2024-05-20T00:00:00Z',
    rating: 5,
  },
  {
    id: '3',
    name: 'Maria P.',
    text: 'I was new to yoga, but Anya made me feel so comfortable and guided me beautifully. The atmosphere at Aarogyadhama is so calming and welcoming. I look forward to my classes every week!',
    date: '2024-07-01T00:00:00Z',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person happy',
    rating: 4,
  },
];

export const classesInfo: ClassInfo[] = [
  {
    id: 'gentle-hatha',
    name: 'Gentle Hatha Yoga',
    description: 'A slow-paced class focusing on foundational postures, breath awareness, and relaxation. Perfect for beginners or those seeking a gentle practice.',
    instructor: 'Ms. Anya Sharma',
    schedule: [
      { day: 'Monday', time: '9:00 AM - 10:00 AM' },
      { day: 'Wednesday', time: '6:00 PM - 7:00 PM' },
    ],
    Icon: Sunrise,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga class gentle',
  },
  {
    id: 'vinyasa-flow',
    name: 'Vinyasa Flow',
    description: 'A dynamic class linking breath with movement. Build strength, flexibility, and focus in this invigorating practice. Some yoga experience recommended.',
    instructor: 'Dr. Elara Vance',
    schedule: [
      { day: 'Tuesday', time: '7:00 AM - 8:00 AM' },
      { day: 'Thursday', time: '5:30 PM - 6:30 PM' },
    ],
    Icon: TrendingUp,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga flow active',
  },
  {
    id: 'restorative-release',
    name: 'Restorative Release',
    description: 'Deeply relaxing and rejuvenating. Poses are held for longer periods using props to support the body, promoting stress relief and healing.',
    instructor: 'Ms. Anya Sharma',
    schedule: [
      { day: 'Friday', time: '7:00 PM - 8:15 PM' },
      { day: 'Sunday', time: '4:00 PM - 5:15 PM' },
    ],
    Icon: Smile,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga restorative calm',
  },
   {
    id: 'physio-mobility',
    name: 'Physio-led Mobility',
    description: 'A class focused on improving joint mobility, flexibility, and functional movement patterns, guided by a physiotherapist. Suitable for all levels, especially those with stiffness or minor aches.',
    instructor: 'Mr. Liam Chen',
    schedule: [
      { day: 'Wednesday', time: '10:30 AM - 11:30 AM' },
    ],
    Icon: Activity,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobility exercise group',
  }
];

export const founderInfo = {
  name: "Dr. Alistair Finch",
  title: "Founder & Chief Wellness Officer",
  story: "Dr. Alistair Finch founded Aarogyadhama with a vision to create a sanctuary where ancient healing wisdom meets modern understanding of health. With a background in both conventional medicine and extensive studies in naturopathy, Ayurveda, and yoga, Dr. Finch witnessed firsthand the limitations of a purely symptomatic approach to illness. He believed that true well-being arises from addressing the root causes of imbalance and nurturing the body's innate capacity to heal. \n\nAarogyadhama began as a small clinic in 2010, driven by Dr. Finch's passion for personalized, holistic care. His commitment to creating a supportive, educational, and tranquil environment quickly resonated with the community. Over the years, the center has grown, attracting a team of like-minded practitioners dedicated to empowering individuals on their unique paths to health and vitality. Our philosophy remains rooted in Dr. Finch's original principles: respect for nature, individualized care, and the harmonious integration of mind, body, and spirit.",
  image: "https://placehold.co/400x400.png",
  dataAiHint: "founder portrait wise"
};

export const contactDetails = {
  address: "123 Wellness Lane, Harmony City, HC 54321",
  phone: "(555) 123-4567",
  email: "connect@naturopathicharmony.com",
  mapImage: "https://placehold.co/800x400.png",
  mapDataAiHint: "map location city"
};
