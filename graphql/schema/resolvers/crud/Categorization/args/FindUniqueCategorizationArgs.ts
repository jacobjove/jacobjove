import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategorizationArgs {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;
}
