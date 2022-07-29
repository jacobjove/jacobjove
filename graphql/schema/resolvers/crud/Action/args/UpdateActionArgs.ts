import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateInput } from "../../../inputs/ActionUpdateInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActionArgs {
  @TypeGraphQL.Field(() => ActionUpdateInput, { nullable: false })
  data!: ActionUpdateInput;

  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;
}
