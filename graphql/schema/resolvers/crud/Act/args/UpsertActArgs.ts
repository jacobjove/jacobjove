import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateInput } from "../../../inputs/ActCreateInput";
import { ActUpdateInput } from "../../../inputs/ActUpdateInput";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActArgs {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateInput, { nullable: false })
  create!: ActCreateInput;

  @TypeGraphQL.Field((_type) => ActUpdateInput, { nullable: false })
  update!: ActUpdateInput;
}
