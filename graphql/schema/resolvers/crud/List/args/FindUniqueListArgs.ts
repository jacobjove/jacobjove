import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueListArgs {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;
}
