import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AdvertisingTitle } from "../advertising/AdvertisingTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";
import { PricingTitle } from "../pricing/PricingTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="advertisings"
          reference="Advertising"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdvertisingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="ImageUrl" source="imageUrl" />
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="pricings"
          reference="Pricing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PricingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
