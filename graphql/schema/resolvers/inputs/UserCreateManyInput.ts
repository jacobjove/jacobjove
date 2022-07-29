import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true,
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  email!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  settings?: Record<string, string> | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin?: Date | undefined;
}
