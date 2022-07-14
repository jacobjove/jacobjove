import * as TypeGraphQL from "type-graphql";
import { CalendarEventUpdateManyMutationInput } from "../../../inputs/CalendarEventUpdateManyMutationInput";
import { CalendarEventWhereInput } from "../../../inputs/CalendarEventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CalendarEventUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, {
    nullable: true,
  })
  where?: CalendarEventWhereInput | undefined;
}
