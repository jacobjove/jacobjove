import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoryArgs {
  @TypeGraphQL.Field(() => CategoryCreateInput, { nullable: false })
  data!: CategoryCreateInput;
}
