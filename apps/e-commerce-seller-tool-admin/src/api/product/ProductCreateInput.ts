import { AdvertisingCreateNestedManyWithoutProductsInput } from "./AdvertisingCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { PricingCreateNestedManyWithoutProductsInput } from "./PricingCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  advertisings?: AdvertisingCreateNestedManyWithoutProductsInput;
  category?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  name?: string | null;
  pricings?: PricingCreateNestedManyWithoutProductsInput;
};
