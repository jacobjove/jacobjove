import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateManyUserInputEnvelope } from "../inputs/CalendarCreateManyUserInputEnvelope";
import { CalendarCreateOrConnectWithoutUserInput } from "../inputs/CalendarCreateOrConnectWithoutUserInput";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class CalendarCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [CalendarCreateWithoutUserInput], { nullable: true })
  create?: CalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: CalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarCreateManyUserInputEnvelope, { nullable: true })
  createMany?: CalendarCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  connect?: CalendarWhereUniqueInput[] | undefined;
}
