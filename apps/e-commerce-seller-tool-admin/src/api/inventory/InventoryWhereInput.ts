import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryWhereInput = {
  forecastDemand?: IntNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  reorderLevel?: IntNullableFilter;
  stockLevel?: IntNullableFilter;
};
