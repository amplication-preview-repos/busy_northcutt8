import { Advertising as TAdvertising } from "../api/advertising/Advertising";

export const ADVERTISING_TITLE_FIELD = "campaignName";

export const AdvertisingTitle = (record: TAdvertising): string => {
  return record.campaignName?.toString() || String(record.id);
};
