import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyBookInputEnvelope } from "../inputs/ShelvingCreateManyBookInputEnvelope";
import { ShelvingCreateOrConnectWithoutBookInput } from "../inputs/ShelvingCreateOrConnectWithoutBookInput";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyWithWhereWithoutBookInput } from "../inputs/ShelvingUpdateManyWithWhereWithoutBookInput";
import { ShelvingUpdateWithWhereUniqueWithoutBookInput } from "../inputs/ShelvingUpdateWithWhereUniqueWithoutBookInput";
import { ShelvingUpsertWithWhereUniqueWithoutBookInput } from "../inputs/ShelvingUpsertWithWhereUniqueWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithoutBookInput", { isAbstract: true })
export class ShelvingUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(() => [ShelvingCreateWithoutBookInput], { nullable: true })
  create?: ShelvingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpsertWithWhereUniqueWithoutBookInput], { nullable: true })
  upsert?: ShelvingUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  set?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  disconnect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  delete?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpdateWithWhereUniqueWithoutBookInput], { nullable: true })
  update?: ShelvingUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: ShelvingUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingScalarWhereInput], { nullable: true })
  deleteMany?: ShelvingScalarWhereInput[] | undefined;
}
