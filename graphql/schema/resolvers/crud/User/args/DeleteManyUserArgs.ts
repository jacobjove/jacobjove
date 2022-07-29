import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserArgs {
  @TypeGraphQL.Field((_type) => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;
}
