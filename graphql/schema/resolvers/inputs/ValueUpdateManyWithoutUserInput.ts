import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInputEnvelope } from "../inputs/ValueCreateManyUserInputEnvelope";
import { ValueCreateOrConnectWithoutUserInput } from "../inputs/ValueCreateOrConnectWithoutUserInput";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueScalarWhereInput } from "../inputs/ValueScalarWhereInput";
import { ValueUpdateManyWithWhereWithoutUserInput } from "../inputs/ValueUpdateManyWithWhereWithoutUserInput";
import { ValueUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ValueUpdateWithWhereUniqueWithoutUserInput";
import { ValueUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ValueUpsertWithWhereUniqueWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ValueCreateWithoutUserInput], { nullable: true })
  create?: ValueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ValueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: ValueUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ValueCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ValueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereUniqueInput], { nullable: true })
  set?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereUniqueInput], { nullable: true })
  disconnect?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereUniqueInput], { nullable: true })
  delete?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereUniqueInput], { nullable: true })
  connect?: ValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: ValueUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: ValueUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueScalarWhereInput], { nullable: true })
  deleteMany?: ValueScalarWhereInput[] | undefined;
}
