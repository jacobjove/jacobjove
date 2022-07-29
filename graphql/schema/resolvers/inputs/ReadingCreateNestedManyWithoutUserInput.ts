import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyUserInputEnvelope } from "../inputs/ReadingCreateManyUserInputEnvelope";
import { ReadingCreateOrConnectWithoutUserInput } from "../inputs/ReadingCreateOrConnectWithoutUserInput";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ReadingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [ReadingCreateWithoutUserInput], { nullable: true })
  create?: ReadingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => ReadingCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;
}
