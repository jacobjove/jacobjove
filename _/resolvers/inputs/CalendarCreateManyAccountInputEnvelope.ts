import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateManyAccountInput } from "../inputs/CalendarCreateManyAccountInput";

@TypeGraphQL.InputType("CalendarCreateManyAccountInputEnvelope", { isAbstract: true })
export class CalendarCreateManyAccountInputEnvelope {
  @TypeGraphQL.Field(() => [CalendarCreateManyAccountInput], { nullable: false })
  data!: CalendarCreateManyAccountInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
