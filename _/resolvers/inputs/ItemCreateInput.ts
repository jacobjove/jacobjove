import { ItemData } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ListCreateNestedOneWithoutItemsInput } from "../inputs/ListCreateNestedOneWithoutItemsInput";

@TypeGraphQL.InputType("ItemCreateInput", { isAbstract: true })
export class ItemCreateInput {
  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ListCreateNestedOneWithoutItemsInput, { nullable: false })
  list!: ListCreateNestedOneWithoutItemsInput;
}
