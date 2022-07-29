import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateInput } from "../inputs/ValueCreateInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueCreateOrConnectInput", {
  isAbstract: true,
})
export class ValueCreateOrConnectInput {
  @TypeGraphQL.Field(() => ValueWhereUniqueInput, { nullable: false })
  where!: ValueWhereUniqueInput;

  @TypeGraphQL.Field(() => ValueCreateInput, { nullable: false })
  create!: ValueCreateInput;
}
