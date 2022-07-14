import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationCreateInput } from "../../../inputs/IdentityActRelationCreateInput";
import { IdentityActRelationUpdateInput } from "../../../inputs/IdentityActRelationUpdateInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationCreateInput, {
    nullable: false,
  })
  create!: IdentityActRelationCreateInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateInput, {
    nullable: false,
  })
  update!: IdentityActRelationUpdateInput;
}
