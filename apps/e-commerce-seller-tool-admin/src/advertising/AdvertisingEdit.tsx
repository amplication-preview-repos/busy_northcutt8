import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const AdvertisingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Budget" source="budget" />
        <TextInput label="CampaignName" source="campaignName" />
        <DateTimeInput label="EndedAt" source="endedAt" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartedAt" source="startedAt" />
        <TextInput label="TargetAudience" multiline source="targetAudience" />
      </SimpleForm>
    </Edit>
  );
};
