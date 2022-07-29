import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyInput } from "../../../inputs/CalendarEventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCalendarEventArgs {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateManyInput], { nullable: false })
  data!: CalendarEventCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
