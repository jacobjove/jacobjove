import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActUpdateWithoutScheduleTemplatesInput } from "../inputs/ActUpdateWithoutScheduleTemplatesInput";

@TypeGraphQL.InputType("ActUpsertWithoutScheduleTemplatesInput", { isAbstract: true })
export class ActUpsertWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ActUpdateWithoutScheduleTemplatesInput, { nullable: false })
  update!: ActUpdateWithoutScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ActCreateWithoutScheduleTemplatesInput, { nullable: false })
  create!: ActCreateWithoutScheduleTemplatesInput;
}
