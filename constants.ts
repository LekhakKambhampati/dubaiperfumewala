import { PricingData, BundleData, CompetitorData, UnitEconomicsData, MarketingPersona, ContentPillar, FunnelStage } from './types';

// PDF 1 & 2 Data Reconciliation
// Cost per bottle: 350
// ASP: 950 (Avg), but PDF 2 gives specific channel pricing.

export const PRICING_DATA: PricingData[] = [
  { channel: 'Own Shops', price: 899, description: 'Member/Loyalty Price' },
  { channel: 'Events/Exhibitions', price: 999, description: 'Event Exclusive' },
  { channel: 'Website (D2C)', price: 1199, description: 'Premium Trust' },
  { channel: 'Marketplaces', price: 1299, description: 'Convenience Fee' },
];

export const BUNDLE_DATA: BundleData[] = [
  { name: 'Office + Night', price: 1799, useCase: 'Use-based selling' },
  { name: '2 Perfume Combo', price: 1999, useCase: 'Increase AOV' },
  { name: '3 Perfume Combo', price: 2699, useCase: 'Best Value Perception' },
  { name: 'Gifting Pack', price: 2999, useCase: 'Weddings/Corporate' },
];

export const UNIT_ECONOMICS: UnitEconomicsData[] = [
  { name: 'Manufacturing Cost', value: 350, fill: '#ef4444' }, // Red-ish for cost
  { name: 'Gross Margin', value: 600, fill: '#10b981' }, // Green for profit (Based on ~950 ASP)
];

export const COMPETITOR_COMPARISON: CompetitorData[] = [
  { attribute: 'Core Philosophy', competitors: 'Dupe-based ("Smells like X")', brand: 'Longevity Authority & Arabic Craft' },
  { attribute: 'Marketing Focus', competitors: 'Heavy Influencer Ads', brand: 'Founder-led, Education & Proof' },
  { attribute: 'Sales Psychology', competitors: 'Discount-driven', brand: 'Performance-driven' },
  { attribute: 'Brand Visibility', competitors: 'Limited Founder Visibility', brand: 'High Founder Trust' },
  { attribute: 'Product Identity', competitors: 'Easily Replaceable', brand: 'Legacy Brand Building' },
];

export const TARGET_AUDIENCE = {
  gender: 'Men & Women',
  age: '18-35 (Primary)',
  locations: ['Mumbai', 'Pune', 'Bangalore'],
  motivation: 'Long-lasting perfume for Indian climate',
};

export const USP_PILLARS = [
  { title: 'Longevity Proof', desc: 'Real-world tests (sweat, AC, multi-day).' },
  { title: 'Arabic Craft', desc: 'Education on Oud/Oils vs just dupes.' },
  { title: 'Founder Trust', desc: 'Visible leadership building credibility.' },
];

// Marketing Specific Data
export const MARKETING_PERSONA: MarketingPersona = {
  title: "The Quality Seeker",
  tagline: "Values substance over hype; wants to smell expensive without breaking the bank.",
  demographics: {
    age: "24 - 35 Years",
    gender: "Men & Women",
    location: "Metro Cities (Mum, Blr, Del)",
    income: "Mid-High Disposable"
  },
  psychographics: [
    "Views perfume as a confidence tool for office/dates.",
    "Skeptical of cheap 'gas' deodorants.",
    "Follows influencers but trusts scientific proof.",
    "Appreciates 'Founder' authenticity."
  ],
  painPoints: [
    "Perfumes that vanish after 1 hour in traffic/heat.",
    "Designer brands are too expensive (₹5k+).",
    "Dupes feel 'cheap' or fake."
  ]
};

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    title: "The Torture Test",
    iconName: "Flame",
    focus: "Extreme Performance Proof",
    format: "Reels / Shorts",
    frequency: "3x / Week",
    goal: "Stop the scroll & prove longevity."
  },
  {
    title: "The Knowledge Gap",
    iconName: "BookOpen",
    focus: "Educating on Notes/Oils",
    format: "Carousel / Founder Video",
    frequency: "2x / Week",
    goal: "Build authority & trust."
  },
  {
    title: "The Lifestyle Signal",
    iconName: "Crown",
    focus: "Success, Confidence, Attraction",
    format: "High-Res Photography",
    frequency: "Daily Stories",
    goal: "Create desire & aspiration."
  }
];

export const FUNNEL_STRATEGY: FunnelStage[] = [
  {
    stage: "Awareness (Top)",
    description: "Interrupt pattern with 'Shocking' proof.",
    channels: ["Instagram Reels", "YouTube Shorts"],
    tactics: ["12-hour wear test videos", "Public reaction challenges"],
    metric: "Video Views / Saves"
  },
  {
    stage: "Consideration (Middle)",
    description: "Build trust via education & social proof.",
    channels: ["Website Reviews", "Founder AMAs"],
    tactics: ["Comparison charts (Oil %)", "Trust badges (Returns/Testing)"],
    metric: "CTR / Add to Cart"
  },
  {
    stage: "Conversion (Bottom)",
    description: "Close the deal with urgency.",
    channels: ["WhatsApp", "Retargeting Ads"],
    tactics: ["Bundle Offers (Save ₹500)", "Limited Time Drops"],
    metric: "ROAS / Conversion Rate"
  },
  {
    stage: "Retention (Loop)",
    description: "Turn customers into community.",
    channels: ["WhatsApp Broadcast", "Email"],
    tactics: ["VIP Early Access", "Refill discounts"],
    metric: "Repeat Purchase Rate (LTV)"
  }
];