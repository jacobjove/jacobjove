import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserArgs {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
