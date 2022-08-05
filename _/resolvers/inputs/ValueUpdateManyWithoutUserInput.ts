import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInputEnvelope } from "../inputs/ValueCreateManyUserInputEnvelope";
import { ValueCreateOrConnectWithoutUserInput } from "../inputs/ValueCreateOrConnectWithoutUserInput";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueScalarWhereInput } from "../inputs/ValueScalarWhereInput";
import { ValueUpdateManyWithWhereWithoutUserInput } from "../inputs/ValueUpdateManyWithWhereWithoutUserInput";
import { ValueUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ValueUpdateWithWhereUniqueWithoutUserInput";
import { ValueUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ValueUpsertWithWhereUniqueWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueUpdateManyWithoutUserInput", { isAbstract: true })
export class ValueUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [ValueCreateWithoutUserInput], { nullable: true })
  create?: ValueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ValueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: ValueUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => ValueCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ValueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ValueWhereUniqueInput], { nullable: true })
  set?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueWhereUniqueInput], { nullable: true })
  disconnect?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueWhereUniqueInput], { nullable: true })
  delete?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueWhereUniqueInput], { nullable: true })
  connect?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: ValueUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: ValueUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueScalarWhereInput], { nullable: true })
  deleteMany?: ValueScalarWhereInput[] | undefined;
}
