import * as TypeGraphQL from "type-graphql";
import { ActionUpdateInput } from "../../../inputs/ActionUpdateInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActionArgs {
  @TypeGraphQL.Field((_type) => ActionUpdateInput, {
    nullable: false,
  })
  data!: ActionUpdateInput;

  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;
}
