import { Advertising } from "../advertising/Advertising";
import { Inventory } from "../inventory/Inventory";
import { Pricing } from "../pricing/Pricing";

export type Product = {
  advertisings?: Array<Advertising>;
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  inventories?: Array<Inventory>;
  name: string | null;
  pricings?: Array<Pricing>;
  updatedAt: Date;
};
