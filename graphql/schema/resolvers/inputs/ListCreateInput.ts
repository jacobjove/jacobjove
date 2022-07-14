import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ItemCreateNestedManyWithoutListInput } from "../inputs/ItemCreateNestedManyWithoutListInput";
import { UserCreateNestedOneWithoutListsInput } from "../inputs/UserCreateNestedOneWithoutListsInput";

@TypeGraphQL.InputType("ListCreateInput", {
  isAbstract: true,
})
export class ListCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  fields?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutListsInput, {
    nullable: false,
  })
  owner!: UserCreateNestedOneWithoutListsInput;

  @TypeGraphQL.Field((_type) => ItemCreateNestedManyWithoutListInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutListInput | undefined;
}
