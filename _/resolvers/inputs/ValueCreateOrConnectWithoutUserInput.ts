import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueCreateOrConnectWithoutUserInput", { isAbstract: true })
export class ValueCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field(() => ValueCreateWithoutUserInput, { nullable: false })
  create!: ValueCreateWithoutUserInput;
}
