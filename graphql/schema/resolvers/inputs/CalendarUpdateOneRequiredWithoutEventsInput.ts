import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateOrConnectWithoutEventsInput } from "../inputs/CalendarCreateOrConnectWithoutEventsInput";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarUpdateWithoutEventsInput } from "../inputs/CalendarUpdateWithoutEventsInput";
import { CalendarUpsertWithoutEventsInput } from "../inputs/CalendarUpsertWithoutEventsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateOneRequiredWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarUpdateOneRequiredWithoutEventsInput {
  @TypeGraphQL.Field(() => CalendarCreateWithoutEventsInput, { nullable: true })
  create?: CalendarCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => CalendarCreateOrConnectWithoutEventsInput, { nullable: true })
  connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => CalendarUpsertWithoutEventsInput, { nullable: true })
  upsert?: CalendarUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: true })
  connect?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => CalendarUpdateWithoutEventsInput, { nullable: true })
  update?: CalendarUpdateWithoutEventsInput | undefined;
}
