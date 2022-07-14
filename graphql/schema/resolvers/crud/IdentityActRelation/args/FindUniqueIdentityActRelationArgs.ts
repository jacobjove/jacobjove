import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityActRelationWhereUniqueInput;
}
