import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PricingUpdateInput = {
  basePrice?: number | null;
  competitorPrice?: number | null;
  discountedPrice?: number | null;
  product?: ProductWhereUniqueInput | null;
};
