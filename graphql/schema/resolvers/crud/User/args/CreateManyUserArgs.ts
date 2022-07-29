import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateManyInput } from "../../../inputs/UserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserArgs {
  @TypeGraphQL.Field(() => [UserCreateManyInput], { nullable: false })
  data!: UserCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
