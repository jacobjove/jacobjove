import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActArgs {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;
}
