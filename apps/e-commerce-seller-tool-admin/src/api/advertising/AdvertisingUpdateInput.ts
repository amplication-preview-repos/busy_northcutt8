import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AdvertisingUpdateInput = {
  budget?: number | null;
  campaignName?: string | null;
  endedAt?: Date | null;
  product?: ProductWhereUniqueInput | null;
  startedAt?: Date | null;
  targetAudience?: string | null;
};
