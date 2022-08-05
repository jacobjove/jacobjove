import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutAccountInput", { isAbstract: true })
export class CalendarCreateOrConnectWithoutAccountInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutAccountInput, { nullable: false })
  create!: CalendarCreateWithoutAccountInput;
}
