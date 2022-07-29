import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateManyMutationInput } from "../../../inputs/CalendarUpdateManyMutationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarArgs {
  @TypeGraphQL.Field(() => CalendarUpdateManyMutationInput, { nullable: false })
  data!: CalendarUpdateManyMutationInput;

  @TypeGraphQL.Field(() => CalendarWhereInput, { nullable: true })
  where?: CalendarWhereInput | undefined;
}
