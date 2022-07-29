import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateManyInput } from "../../../inputs/CalendarCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCalendarArgs {
  @TypeGraphQL.Field(() => [CalendarCreateManyInput], { nullable: false })
  data!: CalendarCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
