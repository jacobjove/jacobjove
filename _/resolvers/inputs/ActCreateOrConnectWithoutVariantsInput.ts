import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutVariantsInput } from "../inputs/ActCreateWithoutVariantsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutVariantsInput", { isAbstract: true })
export class ActCreateOrConnectWithoutVariantsInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutVariantsInput, { nullable: false })
  create!: ActCreateWithoutVariantsInput;
}
