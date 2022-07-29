import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActUpdateWithoutScheduleTemplatesInput } from "../inputs/ActUpdateWithoutScheduleTemplatesInput";

@TypeGraphQL.InputType("ActUpsertWithoutScheduleTemplatesInput", {
  isAbstract: true,
})
export class ActUpsertWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutScheduleTemplatesInput, { nullable: false })
  update!: ActUpdateWithoutScheduleTemplatesInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutScheduleTemplatesInput, { nullable: false })
  create!: ActCreateWithoutScheduleTemplatesInput;
}
