import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdvertisingService } from "./advertising.service";
import { AdvertisingControllerBase } from "./base/advertising.controller.base";

@swagger.ApiTags("advertisings")
@common.Controller("advertisings")
export class AdvertisingController extends AdvertisingControllerBase {
  constructor(
    protected readonly service: AdvertisingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
