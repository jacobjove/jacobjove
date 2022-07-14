import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyInput } from "../../../inputs/CalendarEventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCalendarEventArgs {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateManyInput], {
    nullable: false,
  })
  data!: CalendarEventCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
