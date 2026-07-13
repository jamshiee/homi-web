import { AIChatDemo } from "@/components/feature-demo/AiChat";
import { AllPropertyCategoryDemo } from "@/components/feature-demo/AllPropertyCategory";
import { ContactOwnerDemo } from "@/components/feature-demo/ContactOwner";
import { LocalitySearchDemo } from "@/components/feature-demo/LocalitySearch";
import { TransactionTypeDemo } from "@/components/feature-demo/TransactionType";

export const SITE = {
  name: 'Homi',
  company: 'Homi Holdings',
  tagline: 'Kerala\'s hyperlocal property marketplace',
  description:
    'Browse, search, and list land, houses, commercial spaces, and hospitality properties across Kerala. Free to use — built for Malappuram, Kozhikode, Wayanad, and beyond.',
  url: 'https://homiholdings.com',
  playStoreUrl: '#',
  privacyUrl: 'https://privacy.homiholdings.com',
  contactEmail: 'info@homiholdings.com',
  web3formsKey: 'fcf1e22a-15ef-444f-be5b-dcb3ad3595d0',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features/', label: 'Features' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy/', label: 'Privacy' },
  // { href: '/terms/', label: 'Terms' },
] as const;

export const FOOTER_LINKS = NAV_LINKS;

export const COVERAGE_AREAS = [
  {
    name: 'Malappuram',
    description: 'Land, homes, and commercial listings across the district.',
  },
  {
    name: 'Kozhikode',
    description: 'From city apartments to coastal plots and shops.',
  },
  {
    name: 'Wayanad',
    description: 'Estates, resorts, homestays, and hillside properties.',
  },
] as const;

export const PROPERTY_CATEGORIES = [
  {
    title: 'Land / Plot',
    description: 'Agricultural land, residential plots, and development sites.',
    icon: '🏞️',
  },
  {
    title: 'House / Villa',
    description: 'Independent homes, villas, and gated community residences.',
    icon: '🏠',
  },
  {
    title: 'Building / Commercial',
    description: 'Apartments, offices, shops, warehouses, and rooms.',
    icon: '🏢',
  },
  {
    title: 'Hotel / Lodge / PG',
    description: 'Hotels, resorts, lodges, and paying guest accommodations.',
    icon: '🏨',
  },
] as const;

export const TRANSACTION_TYPES = ['Buy', 'Rent', 'Lease'] as const;

export const FEATURES = [
  {
    title: 'Locality & district search',
    description:
      'Filter listings by district, locality, and property type — find what matters in your neighbourhood, not across all of India.',
    component: LocalitySearchDemo,
  },
  {
    title: 'All property categories',
    description:
      'Land, houses, commercial buildings, and hospitality — one app covers every kind of Kerala property.',
    component: AllPropertyCategoryDemo,
  },
  {
    title: 'Buy, Rent, or Lease',
    description:
      'Every listing is tagged with its transaction type so you know exactly how a property is offered.',
    component: TransactionTypeDemo,
  },
  {
    title: 'Contact owners directly',
    description:
      'Reach property owners through the app — no middlemen, no hidden broker layers.',
    component: ContactOwnerDemo,
  },
  {
    title: 'AI Smart Help Center',
    description:
      'Ask anything about using Homi — our in-app AI assistant powered by Gemini helps you navigate listings, posting, and more.',
    component: AIChatDemo,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Is Homi free to use?',
    answer:
      'Yes. Homi is completely free — no subscription tiers, no listing fees, and no hidden charges. Browse, search, contact owners, and list your property at no cost.',
  },
  {
    question: 'Which areas does Homi cover?',
    answer:
      'Homi is built for Kerala. We are actively listing properties in Malappuram, Kozhikode, and Wayanad, with more districts coming soon. The app is hyperlocal — designed for Kerala neighbourhoods, not generic pan-India search.',
  },
  {
    question: 'How do I list my property?',
    answer:
      'Log in with your phone number, tap the listing flow, add photos, price, location, category, and transaction type (Buy, Rent, or Lease). Your listing goes through admin moderation and is published once approved.',
  },
  {
    question: 'How does login work?',
    answer:
      'Homi uses phone number + OTP verification via Msg91. Enter your mobile number, receive a one-time password by SMS, and you\'re in — no email or password required.',
  },
  {
    question: 'Can I list any property type?',
    answer:
      'Yes. Homi supports four categories: Land / Plot, House / Villa, Building / Commercial, and Hotel / Resorts / Lodge / PG. Each can be listed under Buy, Rent, or Lease.',
  },
  {
    question: 'How does the AI assistant work?',
    answer:
      'Tap the help button in the app to open the Smart Help Center. Ask questions about browsing, listing, filters, or any app feature — the AI assistant uses Gemini to guide you.',
  },
] as const;
