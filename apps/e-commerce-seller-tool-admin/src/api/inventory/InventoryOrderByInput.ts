import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  forecastDemand?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  reorderLevel?: SortOrder;
  stockLevel?: SortOrder;
  updatedAt?: SortOrder;
};
