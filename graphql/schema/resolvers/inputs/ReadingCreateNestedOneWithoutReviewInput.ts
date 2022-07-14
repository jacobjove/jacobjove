import * as TypeGraphQL from "type-graphql";
import { ReadingCreateOrConnectWithoutReviewInput } from "../inputs/ReadingCreateOrConnectWithoutReviewInput";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateNestedOneWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingCreateNestedOneWithoutReviewInput {
  @TypeGraphQL.Field((_type) => ReadingCreateWithoutReviewInput, {
    nullable: true,
  })
  create?: ReadingCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateOrConnectWithoutReviewInput, {
    nullable: true,
  })
  connectOrCreate?: ReadingCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: true,
  })
  connect?: ReadingWhereUniqueInput | undefined;
}
