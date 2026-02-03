export type PricingData = {
  channel: string;
  price: number;
  description: string;
};

export type BundleData = {
  name: string;
  price: number;
  savings?: string;
  useCase: string;
};

export type CompetitorData = {
  attribute: string;
  competitors: string;
  brand: string;
};

export type UnitEconomicsData = {
  name: string;
  value: number;
  fill: string;
};

export type MarketingPersona = {
  title: string;
  tagline: string;
  demographics: {
    age: string;
    gender: string;
    location: string;
    income: string;
  };
  psychographics: string[];
  painPoints: string[];
};

export type ContentPillar = {
  title: string;
  iconName: string; // Mapping to Lucide icon in component
  focus: string;
  format: string;
  frequency: string;
  goal: string;
};

export type FunnelStage = {
  stage: string;
  description: string;
  channels: string[];
  tactics: string[];
  metric: string;
};

export enum ViewState {
  OVERVIEW = 'Overview',
  FINANCIALS = 'Financials & Pricing',
  STRATEGY = 'Strategy & Differentiation',
  MARKETING = 'Marketing & Channels',
  VISION = 'Legacy Vision',
}