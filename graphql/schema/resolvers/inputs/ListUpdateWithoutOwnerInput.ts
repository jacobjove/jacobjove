import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateManyWithoutListInput } from "../inputs/ItemUpdateManyWithoutListInput";

@TypeGraphQL.InputType("ListUpdateWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpdateWithoutOwnerInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  fields?: Record<string, string> | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ItemUpdateManyWithoutListInput, { nullable: true })
  items?: ItemUpdateManyWithoutListInput | undefined;
}
