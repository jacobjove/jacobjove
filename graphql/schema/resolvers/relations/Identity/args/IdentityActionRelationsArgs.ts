import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationScalarFieldEnum } from "../../../../enums/IdentityActRelationScalarFieldEnum";
import { IdentityActRelationOrderByWithRelationInput } from "../../../inputs/IdentityActRelationOrderByWithRelationInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class IdentityActionRelationsArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, { nullable: true })
  where?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationOrderByWithRelationInput], { nullable: true })
  orderBy?: IdentityActRelationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, { nullable: true })
  cursor?: IdentityActRelationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "identityId" | "actionId" | "archivedAt"> | undefined;
}
