import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationScalarFieldEnum } from "../../../../enums/IdentityActRelationScalarFieldEnum";
import { IdentityActRelationOrderByWithRelationInput } from "../../../inputs/IdentityActRelationOrderByWithRelationInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ActIdentityRelationsArgs {
  @TypeGraphQL.Field(() => IdentityActRelationWhereInput, { nullable: true })
  where?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationOrderByWithRelationInput], { nullable: true })
  orderBy?: IdentityActRelationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: true })
  cursor?: IdentityActRelationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "identityId" | "actionId" | "archivedAt"> | undefined;
}
