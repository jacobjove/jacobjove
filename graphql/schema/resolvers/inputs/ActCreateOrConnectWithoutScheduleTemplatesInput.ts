import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutScheduleTemplatesInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutScheduleTemplatesInput, { nullable: false })
  create!: ActCreateWithoutScheduleTemplatesInput;
}
