import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueUpdateWithoutUserInput } from "../inputs/ValueUpdateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field(() => ValueUpdateWithoutUserInput, { nullable: false })
  data!: ValueUpdateWithoutUserInput;
}
