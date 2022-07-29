import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActionArgs {
  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;
}
