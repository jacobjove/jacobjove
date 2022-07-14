import * as TypeGraphQL from "type-graphql";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActUpdateWithoutParentInput } from "../inputs/ActUpdateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true,
})
export class ActUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: false,
  })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutParentInput, {
    nullable: false,
  })
  update!: ActUpdateWithoutParentInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutParentInput, {
    nullable: false,
  })
  create!: ActCreateWithoutParentInput;
}
