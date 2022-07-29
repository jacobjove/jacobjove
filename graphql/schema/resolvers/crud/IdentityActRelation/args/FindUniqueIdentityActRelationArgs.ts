import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIdentityActRelationArgs {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;
}
