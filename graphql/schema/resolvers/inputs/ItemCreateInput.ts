import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemData } from "../../models/Item";
import { DateTimeScalar } from "../../scalars";
import { ListCreateNestedOneWithoutItemsInput } from "../inputs/ListCreateNestedOneWithoutItemsInput";

@TypeGraphQL.InputType("ItemCreateInput", {
  isAbstract: true,
})
export class ItemCreateInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ListCreateNestedOneWithoutItemsInput, { nullable: false })
  list!: ListCreateNestedOneWithoutItemsInput;
}
