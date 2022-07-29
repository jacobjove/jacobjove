import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateManyAccountInput } from "../inputs/CalendarCreateManyAccountInput";

@TypeGraphQL.InputType("CalendarCreateManyAccountInputEnvelope", {
  isAbstract: true,
})
export class CalendarCreateManyAccountInputEnvelope {
  @TypeGraphQL.Field((_type) => [CalendarCreateManyAccountInput], { nullable: false })
  data!: CalendarCreateManyAccountInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
