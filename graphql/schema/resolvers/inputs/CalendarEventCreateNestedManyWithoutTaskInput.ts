import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyTaskInputEnvelope } from "../inputs/CalendarEventCreateManyTaskInputEnvelope";
import { CalendarEventCreateOrConnectWithoutTaskInput } from "../inputs/CalendarEventCreateOrConnectWithoutTaskInput";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutTaskInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutTaskInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyTaskInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
