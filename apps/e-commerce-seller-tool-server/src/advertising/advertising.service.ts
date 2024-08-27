import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvertisingServiceBase } from "./base/advertising.service.base";

@Injectable()
export class AdvertisingService extends AdvertisingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
