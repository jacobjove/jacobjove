import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListUpdateInput } from "../../../inputs/ListUpdateInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateListArgs {
  @TypeGraphQL.Field(() => ListUpdateInput, { nullable: false })
  data!: ListUpdateInput;

  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;
}
