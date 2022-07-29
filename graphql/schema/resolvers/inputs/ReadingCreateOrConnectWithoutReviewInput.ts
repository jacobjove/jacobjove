import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateOrConnectWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingCreateOrConnectWithoutReviewInput {
  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field(() => ReadingCreateWithoutReviewInput, { nullable: false })
  create!: ReadingCreateWithoutReviewInput;
}
