import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateManyUserInput } from "../inputs/CalendarCreateManyUserInput";

@TypeGraphQL.InputType("CalendarCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class CalendarCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [CalendarCreateManyUserInput], { nullable: false })
  data!: CalendarCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
