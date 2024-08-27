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
import { AdvertisingWhereInput } from "./AdvertisingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdvertisingOrderByInput } from "./AdvertisingOrderByInput";

@ArgsType()
class AdvertisingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdvertisingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdvertisingWhereInput, { nullable: true })
  @Type(() => AdvertisingWhereInput)
  where?: AdvertisingWhereInput;

  @ApiProperty({
    required: false,
    type: [AdvertisingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdvertisingOrderByInput], { nullable: true })
  @Type(() => AdvertisingOrderByInput)
  orderBy?: Array<AdvertisingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdvertisingFindManyArgs as AdvertisingFindManyArgs };
