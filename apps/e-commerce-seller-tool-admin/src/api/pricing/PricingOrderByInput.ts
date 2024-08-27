import { SortOrder } from "../../util/SortOrder";

export type PricingOrderByInput = {
  basePrice?: SortOrder;
  competitorPrice?: SortOrder;
  createdAt?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
