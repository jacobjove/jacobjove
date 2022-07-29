import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationScalarFieldEnum } from "../../../../enums/CategorizationScalarFieldEnum";
import { CategorizationOrderByWithRelationInput } from "../../../inputs/CategorizationOrderByWithRelationInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstCategorizationArgs {
  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field(() => [CategorizationOrderByWithRelationInput], { nullable: true })
  orderBy?: CategorizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: true })
  cursor?: CategorizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "categoryId" | "actId" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
