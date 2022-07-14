import * as TypeGraphQL from "type-graphql";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;
}
