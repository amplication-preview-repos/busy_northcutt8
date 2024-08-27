/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PricingCreateInput } from "./PricingCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePricingArgs {
  @ApiProperty({
    required: true,
    type: () => PricingCreateInput,
  })
  @ValidateNested()
  @Type(() => PricingCreateInput)
  @Field(() => PricingCreateInput, { nullable: false })
  data!: PricingCreateInput;
}

export { CreatePricingArgs as CreatePricingArgs };