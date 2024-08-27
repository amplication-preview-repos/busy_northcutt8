import { AdvertisingListRelationFilter } from "../advertising/AdvertisingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { PricingListRelationFilter } from "../pricing/PricingListRelationFilter";

export type ProductWhereInput = {
  advertisings?: AdvertisingListRelationFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  pricings?: PricingListRelationFilter;
};
