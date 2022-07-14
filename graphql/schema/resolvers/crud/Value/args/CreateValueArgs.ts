import * as TypeGraphQL from "type-graphql";
import { ValueCreateInput } from "../../../inputs/ValueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateValueArgs {
  @TypeGraphQL.Field((_type) => ValueCreateInput, {
    nullable: false,
  })
  data!: ValueCreateInput;
}
