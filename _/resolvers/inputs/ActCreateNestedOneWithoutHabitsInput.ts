import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutHabitsInput } from "../inputs/ActCreateOrConnectWithoutHabitsInput";
import { ActCreateWithoutHabitsInput } from "../inputs/ActCreateWithoutHabitsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutHabitsInput", { isAbstract: true })
export class ActCreateNestedOneWithoutHabitsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutHabitsInput, { nullable: true })
  create?: ActCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;
}
