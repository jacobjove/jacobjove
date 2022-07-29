import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorshipOrderByRelationAggregateInput } from "../inputs/AuthorshipOrderByRelationAggregateInput";

@TypeGraphQL.InputType("AuthorOrderByWithRelationInput", {
  isAbstract: true,
})
export class AuthorOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipOrderByRelationAggregateInput, { nullable: true })
  authorships?: AuthorshipOrderByRelationAggregateInput | undefined;
}
