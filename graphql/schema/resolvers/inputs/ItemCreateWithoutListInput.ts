import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemData } from "../../models/Item";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ItemCreateWithoutListInput", {
  isAbstract: true,
})
export class ItemCreateWithoutListInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
