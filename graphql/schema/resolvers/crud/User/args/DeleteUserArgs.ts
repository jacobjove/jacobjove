import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUserArgs {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
