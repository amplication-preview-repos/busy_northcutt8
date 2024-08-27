/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdvertisingService } from "../advertising.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdvertisingCreateInput } from "./AdvertisingCreateInput";
import { Advertising } from "./Advertising";
import { AdvertisingFindManyArgs } from "./AdvertisingFindManyArgs";
import { AdvertisingWhereUniqueInput } from "./AdvertisingWhereUniqueInput";
import { AdvertisingUpdateInput } from "./AdvertisingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdvertisingControllerBase {
  constructor(
    protected readonly service: AdvertisingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Advertising })
  @nestAccessControl.UseRoles({
    resource: "Advertising",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAdvertising(
    @common.Body() data: AdvertisingCreateInput
  ): Promise<Advertising> {
    return await this.service.createAdvertising({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        budget: true,
        campaignName: true,
        createdAt: true,
        endedAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startedAt: true,
        targetAudience: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Advertising] })
  @ApiNestedQuery(AdvertisingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Advertising",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async advertisings(@common.Req() request: Request): Promise<Advertising[]> {
    const args = plainToClass(AdvertisingFindManyArgs, request.query);
    return this.service.advertisings({
      ...args,
      select: {
        budget: true,
        campaignName: true,
        createdAt: true,
        endedAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startedAt: true,
        targetAudience: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Advertising })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertising",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async advertising(
    @common.Param() params: AdvertisingWhereUniqueInput
  ): Promise<Advertising | null> {
    const result = await this.service.advertising({
      where: params,
      select: {
        budget: true,
        campaignName: true,
        createdAt: true,
        endedAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startedAt: true,
        targetAudience: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Advertising })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertising",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAdvertising(
    @common.Param() params: AdvertisingWhereUniqueInput,
    @common.Body() data: AdvertisingUpdateInput
  ): Promise<Advertising | null> {
    try {
      return await this.service.updateAdvertising({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          budget: true,
          campaignName: true,
          createdAt: true,
          endedAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          startedAt: true,
          targetAudience: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Advertising })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertising",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAdvertising(
    @common.Param() params: AdvertisingWhereUniqueInput
  ): Promise<Advertising | null> {
    try {
      return await this.service.deleteAdvertising({
        where: params,
        select: {
          budget: true,
          campaignName: true,
          createdAt: true,
          endedAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          startedAt: true,
          targetAudience: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}