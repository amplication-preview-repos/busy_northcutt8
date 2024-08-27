import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PricingService } from "./pricing.service";
import { PricingControllerBase } from "./base/pricing.controller.base";

@swagger.ApiTags("pricings")
@common.Controller("pricings")
export class PricingController extends PricingControllerBase {
  constructor(
    protected readonly service: PricingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
