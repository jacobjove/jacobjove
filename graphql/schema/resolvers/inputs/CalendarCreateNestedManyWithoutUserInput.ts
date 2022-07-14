import * as TypeGraphQL from "type-graphql";
import { CalendarCreateManyUserInputEnvelope } from "../inputs/CalendarCreateManyUserInputEnvelope";
import { CalendarCreateOrConnectWithoutUserInput } from "../inputs/CalendarCreateOrConnectWithoutUserInput";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class CalendarCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [CalendarCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarWhereUniqueInput[] | undefined;
}
