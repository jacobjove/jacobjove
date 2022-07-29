import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserArgs {
  @TypeGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;
}
