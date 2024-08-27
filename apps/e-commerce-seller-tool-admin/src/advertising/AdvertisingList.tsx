import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const AdvertisingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Advertisings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Budget" source="budget" />
        <TextField label="CampaignName" source="campaignName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndedAt" source="endedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="StartedAt" source="startedAt" />
        <TextField label="TargetAudience" source="targetAudience" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
