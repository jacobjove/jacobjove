import * as TypeGraphQL from "type-graphql";
import { CalendarCreateOrConnectWithoutEventsInput } from "../inputs/CalendarCreateOrConnectWithoutEventsInput";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarUpdateWithoutEventsInput } from "../inputs/CalendarUpdateWithoutEventsInput";
import { CalendarUpsertWithoutEventsInput } from "../inputs/CalendarUpsertWithoutEventsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateOneRequiredWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarUpdateOneRequiredWithoutEventsInput {
  @TypeGraphQL.Field((_type) => CalendarCreateWithoutEventsInput, {
    nullable: true,
  })
  create?: CalendarCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateOrConnectWithoutEventsInput, {
    nullable: true,
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarUpsertWithoutEventsInput, {
    nullable: true,
  })
  upsert?: CalendarUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, {
    nullable: true,
  })
  connect?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarUpdateWithoutEventsInput, {
    nullable: true,
  })
  update?: CalendarUpdateWithoutEventsInput | undefined;
}
