import { Product } from "../product/Product";

export type Advertising = {
  budget: number | null;
  campaignName: string | null;
  createdAt: Date;
  endedAt: Date | null;
  id: string;
  product?: Product | null;
  startedAt: Date | null;
  targetAudience: string | null;
  updatedAt: Date;
};
