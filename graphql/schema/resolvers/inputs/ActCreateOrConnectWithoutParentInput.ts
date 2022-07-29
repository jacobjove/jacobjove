import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutParentInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutParentInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutParentInput, { nullable: false })
  create!: ActCreateWithoutParentInput;
}
