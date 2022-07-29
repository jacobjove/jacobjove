import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoryArgs {
  @TypeGraphQL.Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
