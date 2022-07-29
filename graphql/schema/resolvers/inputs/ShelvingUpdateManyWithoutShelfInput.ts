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
  @TypeGraphQL.Field(() => [ShelvingCreateWithoutShelfInput], { nullable: true })
  create?: ShelvingCreateWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingCreateOrConnectWithoutShelfInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpsertWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  upsert?: ShelvingUpsertWithWhereUniqueWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateManyShelfInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyShelfInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  set?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  disconnect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  delete?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpdateWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  update?: ShelvingUpdateWithWhereUniqueWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpdateManyWithWhereWithoutShelfInput], { nullable: true })
  updateMany?: ShelvingUpdateManyWithWhereWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingScalarWhereInput], { nullable: true })
  deleteMany?: ShelvingScalarWhereInput[] | undefined;
}
