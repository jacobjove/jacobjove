import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateManyInput } from "../../../inputs/CategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoryArgs {
  @TypeGraphQL.Field(() => [CategoryCreateManyInput], { nullable: false })
  data!: CategoryCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
