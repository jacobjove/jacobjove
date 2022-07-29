import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarCreateManyInput", {
  isAbstract: true,
})
export class CalendarCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  color?: string | undefined;

  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  provider?: "google" | "apple" | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  accountId?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  primary?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  enabled?: boolean | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
