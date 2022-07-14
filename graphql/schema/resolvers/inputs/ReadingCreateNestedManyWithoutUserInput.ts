import * as TypeGraphQL from "type-graphql";
import { ReadingCreateManyUserInputEnvelope } from "../inputs/ReadingCreateManyUserInputEnvelope";
import { ReadingCreateOrConnectWithoutUserInput } from "../inputs/ReadingCreateOrConnectWithoutUserInput";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ReadingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ReadingCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ReadingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ReadingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ReadingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], {
    nullable: true,
  })
  connect?: ReadingWhereUniqueInput[] | undefined;
}
