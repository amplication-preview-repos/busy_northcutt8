import { Product } from "../product/Product";

export type Pricing = {
  basePrice: number | null;
  competitorPrice: number | null;
  createdAt: Date;
  discountedPrice: number | null;
  id: string;
  product?: Product | null;
  updatedAt: Date;
};
