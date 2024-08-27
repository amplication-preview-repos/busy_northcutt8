import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AdvertisingWhereInput = {
  budget?: FloatNullableFilter;
  campaignName?: StringNullableFilter;
  endedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  startedAt?: DateTimeNullableFilter;
  targetAudience?: StringNullableFilter;
};
