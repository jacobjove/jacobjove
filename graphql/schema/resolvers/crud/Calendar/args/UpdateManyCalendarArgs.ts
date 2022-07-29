import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateManyMutationInput } from "../../../inputs/CalendarUpdateManyMutationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarUpdateManyMutationInput, { nullable: false })
  data!: CalendarUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => CalendarWhereInput, { nullable: true })
  where?: CalendarWhereInput | undefined;
}
