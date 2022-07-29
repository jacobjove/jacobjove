import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueUpdateWithoutUserInput } from "../inputs/ValueUpdateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ValueUpdateWithoutUserInput, { nullable: false })
  update!: ValueUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ValueCreateWithoutUserInput, { nullable: false })
  create!: ValueCreateWithoutUserInput;
}
