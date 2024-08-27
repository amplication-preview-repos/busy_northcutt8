import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PricingCreateInput = {
  basePrice?: number | null;
  competitorPrice?: number | null;
  discountedPrice?: number | null;
  product?: ProductWhereUniqueInput | null;
};
