import * as TypeGraphQL from "type-graphql";
import { ItemScalarFieldEnum } from "../../../../enums/ItemScalarFieldEnum";
import { ItemOrderByWithRelationInput } from "../../../inputs/ItemOrderByWithRelationInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstItemArgs {
  @TypeGraphQL.Field((_type) => ItemWhereInput, {
    nullable: true,
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ItemOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "listId" | "data" | "createdAt" | "updatedAt" | "archivedAt"> | undefined;
}
