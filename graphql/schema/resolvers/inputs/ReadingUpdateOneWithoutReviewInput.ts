import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateOrConnectWithoutReviewInput } from "../inputs/ReadingCreateOrConnectWithoutReviewInput";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingUpdateWithoutReviewInput } from "../inputs/ReadingUpdateWithoutReviewInput";
import { ReadingUpsertWithoutReviewInput } from "../inputs/ReadingUpsertWithoutReviewInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateOneWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingUpdateOneWithoutReviewInput {
  @TypeGraphQL.Field((_type) => ReadingCreateWithoutReviewInput, { nullable: true })
  create?: ReadingCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateOrConnectWithoutReviewInput, { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpsertWithoutReviewInput, { nullable: true })
  upsert?: ReadingUpsertWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: true })
  connect?: ReadingWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpdateWithoutReviewInput, { nullable: true })
  update?: ReadingUpdateWithoutReviewInput | undefined;
}
