import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemData } from "../../models/Item";

@TypeGraphQL.InputType("ItemUpdateManyMutationInput", {
  isAbstract: true,
})
export class ItemUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
