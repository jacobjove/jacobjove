import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateManyWithoutListInput } from "../inputs/ItemUpdateManyWithoutListInput";
import { UserUpdateOneRequiredWithoutListsInput } from "../inputs/UserUpdateOneRequiredWithoutListsInput";

@TypeGraphQL.InputType("ListUpdateInput", {
  isAbstract: true,
})
export class ListUpdateInput {
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

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutListsInput, { nullable: true })
  owner?: UserUpdateOneRequiredWithoutListsInput | undefined;

  @TypeGraphQL.Field((_type) => ItemUpdateManyWithoutListInput, { nullable: true })
  items?: ItemUpdateManyWithoutListInput | undefined;
}
