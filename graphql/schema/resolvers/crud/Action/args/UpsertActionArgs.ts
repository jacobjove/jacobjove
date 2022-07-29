import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateInput } from "../../../inputs/ActionCreateInput";
import { ActionUpdateInput } from "../../../inputs/ActionUpdateInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionArgs {
  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionCreateInput, { nullable: false })
  create!: ActionCreateInput;

  @TypeGraphQL.Field(() => ActionUpdateInput, { nullable: false })
  update!: ActionUpdateInput;
}
