import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateInput } from "../../../inputs/ValueCreateInput";
import { ValueUpdateInput } from "../../../inputs/ValueUpdateInput";
import { ValueWhereUniqueInput } from "../../../inputs/ValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertValueArgs {
  @TypeGraphQL.Field((_type) => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ValueCreateInput, { nullable: false })
  create!: ValueCreateInput;

  @TypeGraphQL.Field((_type) => ValueUpdateInput, { nullable: false })
  update!: ValueUpdateInput;
}
