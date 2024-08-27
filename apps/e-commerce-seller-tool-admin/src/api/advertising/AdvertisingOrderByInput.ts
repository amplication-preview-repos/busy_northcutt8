import { SortOrder } from "../../util/SortOrder";

export type AdvertisingOrderByInput = {
  budget?: SortOrder;
  campaignName?: SortOrder;
  createdAt?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  startedAt?: SortOrder;
  targetAudience?: SortOrder;
  updatedAt?: SortOrder;
};
