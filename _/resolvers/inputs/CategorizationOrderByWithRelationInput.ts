import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";

@TypeGraphQL.InputType("CategorizationOrderByWithRelationInput", { isAbstract: true })
export class CategorizationOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CategoryOrderByWithRelationInput, { nullable: true })
  category?: CategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByWithRelationInput, { nullable: true })
  act?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
