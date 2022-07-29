import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateManyMutationInput } from "../../../inputs/CalendarEventUpdateManyMutationInput";
import { CalendarEventWhereInput } from "../../../inputs/CalendarEventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarEventArgs {
  @TypeGraphQL.Field(() => CalendarEventUpdateManyMutationInput, { nullable: false })
  data!: CalendarEventUpdateManyMutationInput;

  @TypeGraphQL.Field(() => CalendarEventWhereInput, { nullable: true })
  where?: CalendarEventWhereInput | undefined;
}
