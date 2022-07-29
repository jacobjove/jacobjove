import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemData } from "../../models/Item";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ItemCreateManyInput", {
  isAbstract: true,
})
export class ItemCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  listId!: string;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
