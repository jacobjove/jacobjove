import * as TypeGraphQL from "type-graphql";
import { ActionCreateInput } from "../../../inputs/ActionCreateInput";
import { ActionUpdateInput } from "../../../inputs/ActionUpdateInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionCreateInput, {
    nullable: false,
  })
  create!: ActionCreateInput;

  @TypeGraphQL.Field((_type) => ActionUpdateInput, {
    nullable: false,
  })
  update!: ActionUpdateInput;
}
