import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  forecastDemand?: number | null;
  product?: ProductWhereUniqueInput | null;
  reorderLevel?: number | null;
  stockLevel?: number | null;
};
