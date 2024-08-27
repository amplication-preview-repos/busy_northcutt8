import { Pricing as TPricing } from "../api/pricing/Pricing";

export const PRICING_TITLE_FIELD = "id";

export const PricingTitle = (record: TPricing): string => {
  return record.id?.toString() || String(record.id);
};
