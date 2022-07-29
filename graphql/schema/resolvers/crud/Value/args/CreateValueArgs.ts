import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateInput } from "../../../inputs/ValueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateValueArgs {
  @TypeGraphQL.Field(() => ValueCreateInput, { nullable: false })
  data!: ValueCreateInput;
}
