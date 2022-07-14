import * as TypeGraphQL from "type-graphql";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueListArgs {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;
}
