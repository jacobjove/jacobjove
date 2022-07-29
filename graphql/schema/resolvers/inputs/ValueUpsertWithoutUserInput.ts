import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueUpdateWithoutUserInput } from "../inputs/ValueUpdateWithoutUserInput";
import { ValueCreateInput } from "./ValueCreateInput";

@TypeGraphQL.InputType("ValueUpsertWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpsertWithoutUserInput {
  @TypeGraphQL.Field((_type) => ValueUpdateWithoutUserInput, { nullable: false })
  update!: ValueUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ValueCreateInput, { nullable: false })
  create!: ValueCreateInput;
}
