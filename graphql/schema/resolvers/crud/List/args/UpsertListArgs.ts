import * as TypeGraphQL from "type-graphql";
import { ListCreateInput } from "../../../inputs/ListCreateInput";
import { ListUpdateInput } from "../../../inputs/ListUpdateInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertListArgs {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ListCreateInput, {
    nullable: false,
  })
  create!: ListCreateInput;

  @TypeGraphQL.Field((_type) => ListUpdateInput, {
    nullable: false,
  })
  update!: ListUpdateInput;
}
