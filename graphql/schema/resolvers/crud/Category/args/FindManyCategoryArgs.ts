import * as TypeGraphQL from "type-graphql";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum";
import { CategoryOrderByWithRelationInput } from "../../../inputs/CategoryOrderByWithRelationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCategoryArgs {
  @TypeGraphQL.Field((_type) => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CategoryOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [CategoryScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt" | "archivedAt"> | undefined;
}
