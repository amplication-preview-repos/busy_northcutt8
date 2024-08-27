import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AdvertisingController } from "../advertising.controller";
import { AdvertisingService } from "../advertising.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  budget: 42.42,
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  endedAt: new Date(),
  id: "exampleId",
  startedAt: new Date(),
  targetAudience: "exampleTargetAudience",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  budget: 42.42,
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  endedAt: new Date(),
  id: "exampleId",
  startedAt: new Date(),
  targetAudience: "exampleTargetAudience",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    budget: 42.42,
    campaignName: "exampleCampaignName",
    createdAt: new Date(),
    endedAt: new Date(),
    id: "exampleId",
    startedAt: new Date(),
    targetAudience: "exampleTargetAudience",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  budget: 42.42,
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  endedAt: new Date(),
  id: "exampleId",
  startedAt: new Date(),
  targetAudience: "exampleTargetAudience",
  updatedAt: new Date(),
};

const service = {
  createAdvertising() {
    return CREATE_RESULT;
  },
  advertisings: () => FIND_MANY_RESULT,
  advertising: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Advertising", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdvertisingService,
          useValue: service,
        },
      ],
      controllers: [AdvertisingController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /advertisings", async () => {
    await request(app.getHttpServer())
      .post("/advertisings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endedAt: CREATE_RESULT.endedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /advertisings", async () => {
    await request(app.getHttpServer())
      .get("/advertisings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endedAt: FIND_MANY_RESULT[0].endedAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /advertisings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/advertisings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /advertisings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/advertisings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endedAt: FIND_ONE_RESULT.endedAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /advertisings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/advertisings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endedAt: CREATE_RESULT.endedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/advertisings")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
