import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIdentityArgs {
  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;
}
