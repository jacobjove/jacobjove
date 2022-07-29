import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum";
import { CategoryOrderByWithRelationInput } from "../../../inputs/CategoryOrderByWithRelationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCategoryArgs {
  @TypeGraphQL.Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(() => [CategoryOrderByWithRelationInput], { nullable: true })
  orderBy?: CategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: true })
  cursor?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [CategoryScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt" | "archivedAt"> | undefined;
}
