import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActUpdateWithoutParentInput } from "../inputs/ActUpdateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpsertWithWhereUniqueWithoutParentInput", { isAbstract: true })
export class ActUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActUpdateWithoutParentInput, { nullable: false })
  update!: ActUpdateWithoutParentInput;

  @TypeGraphQL.Field(() => ActCreateWithoutParentInput, { nullable: false })
  create!: ActCreateWithoutParentInput;
}
