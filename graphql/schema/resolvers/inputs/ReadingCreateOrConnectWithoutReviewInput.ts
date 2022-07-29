import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateOrConnectWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingCreateOrConnectWithoutReviewInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingCreateWithoutReviewInput, { nullable: false })
  create!: ReadingCreateWithoutReviewInput;
}
