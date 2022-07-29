import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutHabitsInput } from "../inputs/ActCreateWithoutHabitsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutHabitsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutHabitsInput, { nullable: false })
  create!: ActCreateWithoutHabitsInput;
}
