import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteListArgs {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;
}
