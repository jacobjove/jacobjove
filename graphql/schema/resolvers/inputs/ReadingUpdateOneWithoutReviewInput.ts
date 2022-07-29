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
  @TypeGraphQL.Field(() => ReadingCreateWithoutReviewInput, { nullable: true })
  create?: ReadingCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(() => ReadingCreateOrConnectWithoutReviewInput, { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpsertWithoutReviewInput, { nullable: true })
  upsert?: ReadingUpsertWithoutReviewInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: true })
  connect?: ReadingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateWithoutReviewInput, { nullable: true })
  update?: ReadingUpdateWithoutReviewInput | undefined;
}
