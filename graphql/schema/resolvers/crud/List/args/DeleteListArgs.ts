import * as TypeGraphQL from "type-graphql";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteListArgs {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;
}
