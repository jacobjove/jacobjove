import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateInput } from "../../../inputs/UserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserArgs {
  @TypeGraphQL.Field((_type) => UserCreateInput, { nullable: false })
  data!: UserCreateInput;
}
