import * as TypeGraphQL from "type-graphql";
import { CalendarUpdateManyMutationInput } from "../../../inputs/CalendarUpdateManyMutationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CalendarUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => CalendarWhereInput, {
    nullable: true,
  })
  where?: CalendarWhereInput | undefined;
}
