import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityScalarFieldEnum } from "../../../../enums/IdentityScalarFieldEnum";
import { IdentityOrderByWithRelationInput } from "../../../inputs/IdentityOrderByWithRelationInput";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereInput, { nullable: true })
  where?: IdentityWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [IdentityOrderByWithRelationInput], { nullable: true })
  orderBy?: IdentityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: true })
  cursor?: IdentityWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "slug" | "description"> | undefined;
}
