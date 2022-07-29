import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;
}
