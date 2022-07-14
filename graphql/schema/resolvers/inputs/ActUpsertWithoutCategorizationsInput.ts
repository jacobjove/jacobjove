import * as TypeGraphQL from "type-graphql";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActUpdateWithoutCategorizationsInput } from "../inputs/ActUpdateWithoutCategorizationsInput";

@TypeGraphQL.InputType("ActUpsertWithoutCategorizationsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutCategorizationsInput, {
    nullable: false,
  })
  update!: ActUpdateWithoutCategorizationsInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutCategorizationsInput, {
    nullable: false,
  })
  create!: ActCreateWithoutCategorizationsInput;
}
