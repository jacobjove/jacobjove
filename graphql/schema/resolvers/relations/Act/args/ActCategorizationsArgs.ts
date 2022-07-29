import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationScalarFieldEnum } from "../../../../enums/CategorizationScalarFieldEnum";
import { CategorizationOrderByWithRelationInput } from "../../../inputs/CategorizationOrderByWithRelationInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ActCategorizationsArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationOrderByWithRelationInput], { nullable: true })
  orderBy?: CategorizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: true })
  cursor?: CategorizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "categoryId" | "actId" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
