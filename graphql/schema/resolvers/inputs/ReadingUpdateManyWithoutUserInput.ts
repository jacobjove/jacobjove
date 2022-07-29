import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyUserInputEnvelope } from "../inputs/ReadingCreateManyUserInputEnvelope";
import { ReadingCreateOrConnectWithoutUserInput } from "../inputs/ReadingCreateOrConnectWithoutUserInput";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyWithWhereWithoutUserInput } from "../inputs/ReadingUpdateManyWithWhereWithoutUserInput";
import { ReadingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReadingUpdateWithWhereUniqueWithoutUserInput";
import { ReadingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReadingUpsertWithWhereUniqueWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ReadingCreateWithoutUserInput], { nullable: true })
  create?: ReadingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: ReadingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  set?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  disconnect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  delete?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: ReadingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: ReadingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarWhereInput], { nullable: true })
  deleteMany?: ReadingScalarWhereInput[] | undefined;
}
