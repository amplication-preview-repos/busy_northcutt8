import { Product } from "../product/Product";

export type Inventory = {
  createdAt: Date;
  forecastDemand: number | null;
  id: string;
  product?: Product | null;
  reorderLevel: number | null;
  stockLevel: number | null;
  updatedAt: Date;
};
