import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategoryArgs {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
