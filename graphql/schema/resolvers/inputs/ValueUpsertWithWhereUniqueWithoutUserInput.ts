import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueUpdateWithoutUserInput } from "../inputs/ValueUpdateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field(() => ValueUpdateWithoutUserInput, { nullable: false })
  update!: ValueUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => ValueCreateWithoutUserInput, { nullable: false })
  create!: ValueCreateWithoutUserInput;
}
