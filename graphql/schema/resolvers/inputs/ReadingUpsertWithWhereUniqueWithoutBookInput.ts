import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutBookInput } from "../inputs/ReadingCreateWithoutBookInput";
import { ReadingUpdateWithoutBookInput } from "../inputs/ReadingUpdateWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateWithoutBookInput, { nullable: false })
  update!: ReadingUpdateWithoutBookInput;

  @TypeGraphQL.Field((_type) => ReadingCreateWithoutBookInput, { nullable: false })
  create!: ReadingCreateWithoutBookInput;
}
