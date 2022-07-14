import * as TypeGraphQL from "type-graphql";
import { ListUpdateInput } from "../../../inputs/ListUpdateInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateListArgs {
  @TypeGraphQL.Field((_type) => ListUpdateInput, {
    nullable: false,
  })
  data!: ListUpdateInput;

  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;
}
