import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueWhereUniqueInput } from "../../../inputs/ValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueValueArgs {
  @TypeGraphQL.Field((_type) => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;
}
