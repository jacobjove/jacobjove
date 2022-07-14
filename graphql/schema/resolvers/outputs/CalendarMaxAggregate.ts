import * as TypeGraphQL from "type-graphql";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarMaxAggregate", {
  isAbstract: true,
})
export class CalendarMaxAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  uid!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  color!: string | null;

  @TypeGraphQL.Field((_type) => CalendarProvider, {
    nullable: true,
  })
  provider!: "google" | "apple" | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  syncToken!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  accountId!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  primary!: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  public!: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  enabled!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;
}
