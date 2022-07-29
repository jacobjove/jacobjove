import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueUpdateInput } from "../../../inputs/ValueUpdateInput";
import { ValueWhereUniqueInput } from "../../../inputs/ValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateValueArgs {
  @TypeGraphQL.Field((_type) => ValueUpdateInput, { nullable: false })
  data!: ValueUpdateInput;

  @TypeGraphQL.Field((_type) => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;
}
