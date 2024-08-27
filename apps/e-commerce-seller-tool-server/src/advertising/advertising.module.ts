import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvertisingModuleBase } from "./base/advertising.module.base";
import { AdvertisingService } from "./advertising.service";
import { AdvertisingController } from "./advertising.controller";
import { AdvertisingResolver } from "./advertising.resolver";

@Module({
  imports: [AdvertisingModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdvertisingController],
  providers: [AdvertisingService, AdvertisingResolver],
  exports: [AdvertisingService],
})
export class AdvertisingModule {}
