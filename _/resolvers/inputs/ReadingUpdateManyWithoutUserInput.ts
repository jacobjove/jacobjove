import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyUserInputEnvelope } from "../inputs/ReadingCreateManyUserInputEnvelope";
import { ReadingCreateOrConnectWithoutUserInput } from "../inputs/ReadingCreateOrConnectWithoutUserInput";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyWithWhereWithoutUserInput } from "../inputs/ReadingUpdateManyWithWhereWithoutUserInput";
import { ReadingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReadingUpdateWithWhereUniqueWithoutUserInput";
import { ReadingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReadingUpsertWithWhereUniqueWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithoutUserInput", { isAbstract: true })
export class ReadingUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [ReadingCreateWithoutUserInput], { nullable: true })
  create?: ReadingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: ReadingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => ReadingCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  set?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  disconnect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  delete?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: ReadingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: ReadingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingScalarWhereInput], { nullable: true })
  deleteMany?: ReadingScalarWhereInput[] | undefined;
}
