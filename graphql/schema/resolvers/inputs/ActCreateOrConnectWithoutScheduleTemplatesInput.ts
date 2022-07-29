import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutScheduleTemplatesInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutScheduleTemplatesInput, { nullable: false })
  create!: ActCreateWithoutScheduleTemplatesInput;
}
