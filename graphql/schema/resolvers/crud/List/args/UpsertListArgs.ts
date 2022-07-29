import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateInput } from "../../../inputs/ListCreateInput";
import { ListUpdateInput } from "../../../inputs/ListUpdateInput";
import { ListWhereUniqueInput } from "../../../inputs/ListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertListArgs {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field(() => ListCreateInput, { nullable: false })
  create!: ListCreateInput;

  @TypeGraphQL.Field(() => ListUpdateInput, { nullable: false })
  update!: ListUpdateInput;
}
