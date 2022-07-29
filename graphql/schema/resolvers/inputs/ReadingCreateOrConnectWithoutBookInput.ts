import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutBookInput } from "../inputs/ReadingCreateWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateOrConnectWithoutBookInput", {
  isAbstract: true,
})
export class ReadingCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingCreateWithoutBookInput, { nullable: false })
  create!: ReadingCreateWithoutBookInput;
}
