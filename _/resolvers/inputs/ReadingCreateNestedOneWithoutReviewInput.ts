import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateOrConnectWithoutReviewInput } from "../inputs/ReadingCreateOrConnectWithoutReviewInput";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateNestedOneWithoutReviewInput", { isAbstract: true })
export class ReadingCreateNestedOneWithoutReviewInput {
  @TypeGraphQL.Field(() => ReadingCreateWithoutReviewInput, { nullable: true })
  create?: ReadingCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(() => ReadingCreateOrConnectWithoutReviewInput, { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: true })
  connect?: ReadingWhereUniqueInput | undefined;
}
