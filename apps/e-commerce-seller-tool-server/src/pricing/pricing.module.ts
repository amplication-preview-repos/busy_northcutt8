import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PricingModuleBase } from "./base/pricing.module.base";
import { PricingService } from "./pricing.service";
import { PricingController } from "./pricing.controller";
import { PricingResolver } from "./pricing.resolver";

@Module({
  imports: [PricingModuleBase, forwardRef(() => AuthModule)],
  controllers: [PricingController],
  providers: [PricingService, PricingResolver],
  exports: [PricingService],
})
export class PricingModule {}
