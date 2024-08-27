/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvertisingUpdateManyWithoutProductsInput } from "./AdvertisingUpdateManyWithoutProductsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { PricingUpdateManyWithoutProductsInput } from "./PricingUpdateManyWithoutProductsInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdvertisingUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => AdvertisingUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => AdvertisingUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  advertisings?: AdvertisingUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => InventoryUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => InventoryUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => InventoryUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  inventories?: InventoryUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PricingUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PricingUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PricingUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  pricings?: PricingUpdateManyWithoutProductsInput;
}

export { ProductUpdateInput as ProductUpdateInput };
