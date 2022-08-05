import { ItemData } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ItemUpdateWithoutListInput", { isAbstract: true })
export class ItemUpdateWithoutListInput {
  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
