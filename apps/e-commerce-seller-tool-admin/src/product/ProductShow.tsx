import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="ImageUrl" source="imageUrl" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Advertising"
          target="productId"
          label="Advertisings"
        >
          <Datagrid rowClick="show">
            <TextField label="Budget" source="budget" />
            <TextField label="CampaignName" source="campaignName" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndedAt" source="endedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="StartedAt" source="startedAt" />
            <TextField label="TargetAudience" source="targetAudience" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Inventory"
          target="productId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ForecastDemand" source="forecastDemand" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReorderLevel" source="reorderLevel" />
            <TextField label="StockLevel" source="stockLevel" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Pricing"
          target="productId"
          label="Pricings"
        >
          <Datagrid rowClick="show">
            <TextField label="BasePrice" source="basePrice" />
            <TextField label="CompetitorPrice" source="competitorPrice" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DiscountedPrice" source="discountedPrice" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
