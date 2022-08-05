import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateWithoutParentInput } from "../inputs/ActUpdateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateWithWhereUniqueWithoutParentInput", { isAbstract: true })
export class ActUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActUpdateWithoutParentInput, { nullable: false })
  data!: ActUpdateWithoutParentInput;
}
