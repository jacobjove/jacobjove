import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ItemCreateNestedManyWithoutListInput } from "../inputs/ItemCreateNestedManyWithoutListInput";
import { UserCreateNestedOneWithoutListsInput } from "../inputs/UserCreateNestedOneWithoutListsInput";

@TypeGraphQL.InputType("ListCreateInput", {
  isAbstract: true,
})
export class ListCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  fields?: Record<string, string> | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutListsInput, { nullable: false })
  owner!: UserCreateNestedOneWithoutListsInput;

  @TypeGraphQL.Field(() => ItemCreateNestedManyWithoutListInput, { nullable: true })
  items?: ItemCreateNestedManyWithoutListInput | undefined;
}
