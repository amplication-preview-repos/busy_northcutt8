import { AdvertisingUpdateManyWithoutProductsInput } from "./AdvertisingUpdateManyWithoutProductsInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { PricingUpdateManyWithoutProductsInput } from "./PricingUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  advertisings?: AdvertisingUpdateManyWithoutProductsInput;
  category?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  pricings?: PricingUpdateManyWithoutProductsInput;
};
