import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  forecastDemand?: number | null;
  product?: ProductWhereUniqueInput | null;
  reorderLevel?: number | null;
  stockLevel?: number | null;
};
