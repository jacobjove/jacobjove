import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingUpdateWithoutUserInput } from "../inputs/ReadingUpdateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpsertWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class ReadingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field(() => ReadingUpdateWithoutUserInput, { nullable: false })
  update!: ReadingUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => ReadingCreateWithoutUserInput, { nullable: false })
  create!: ReadingCreateWithoutUserInput;
}
