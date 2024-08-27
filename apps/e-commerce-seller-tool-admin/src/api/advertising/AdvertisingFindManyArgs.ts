import { AdvertisingWhereInput } from "./AdvertisingWhereInput";
import { AdvertisingOrderByInput } from "./AdvertisingOrderByInput";

export type AdvertisingFindManyArgs = {
  where?: AdvertisingWhereInput;
  orderBy?: Array<AdvertisingOrderByInput>;
  skip?: number;
  take?: number;
};
