import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateManyBookInputEnvelope } from "../inputs/ShelvingCreateManyBookInputEnvelope";
import { ShelvingCreateOrConnectWithoutBookInput } from "../inputs/ShelvingCreateOrConnectWithoutBookInput";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyWithWhereWithoutBookInput } from "../inputs/ShelvingUpdateManyWithWhereWithoutBookInput";
import { ShelvingUpdateWithWhereUniqueWithoutBookInput } from "../inputs/ShelvingUpdateWithWhereUniqueWithoutBookInput";
import { ShelvingUpsertWithWhereUniqueWithoutBookInput } from "../inputs/ShelvingUpsertWithWhereUniqueWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingUpdateManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [ShelvingCreateWithoutBookInput], {
    nullable: true,
  })
  create?: ShelvingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingCreateOrConnectWithoutBookInput], {
    nullable: true,
  })
  connectOrCreate?: ShelvingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: ShelvingUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingCreateManyBookInputEnvelope, {
    nullable: true,
  })
  createMany?: ShelvingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], {
    nullable: true,
  })
  set?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], {
    nullable: true,
  })
  delete?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], {
    nullable: true,
  })
  connect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: ShelvingUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  updateMany?: ShelvingUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ShelvingScalarWhereInput[] | undefined;
}
