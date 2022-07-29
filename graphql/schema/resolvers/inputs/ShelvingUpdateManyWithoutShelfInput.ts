import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyShelfInputEnvelope } from "../inputs/ShelvingCreateManyShelfInputEnvelope";
import { ShelvingCreateOrConnectWithoutShelfInput } from "../inputs/ShelvingCreateOrConnectWithoutShelfInput";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyWithWhereWithoutShelfInput } from "../inputs/ShelvingUpdateManyWithWhereWithoutShelfInput";
import { ShelvingUpdateWithWhereUniqueWithoutShelfInput } from "../inputs/ShelvingUpdateWithWhereUniqueWithoutShelfInput";
import { ShelvingUpsertWithWhereUniqueWithoutShelfInput } from "../inputs/ShelvingUpsertWithWhereUniqueWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingUpdateManyWithoutShelfInput {
  @TypeGraphQL.Field((_type) => [ShelvingCreateWithoutShelfInput], { nullable: true })
  create?: ShelvingCreateWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingCreateOrConnectWithoutShelfInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpsertWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  upsert?: ShelvingUpsertWithWhereUniqueWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingCreateManyShelfInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyShelfInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], { nullable: true })
  set?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], { nullable: true })
  disconnect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], { nullable: true })
  delete?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpdateWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  update?: ShelvingUpdateWithWhereUniqueWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingUpdateManyWithWhereWithoutShelfInput], { nullable: true })
  updateMany?: ShelvingUpdateManyWithWhereWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingScalarWhereInput], { nullable: true })
  deleteMany?: ShelvingScalarWhereInput[] | undefined;
}
