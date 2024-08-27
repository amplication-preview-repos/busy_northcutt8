import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PricingWhereInput = {
  basePrice?: FloatNullableFilter;
  competitorPrice?: FloatNullableFilter;
  discountedPrice?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
};
