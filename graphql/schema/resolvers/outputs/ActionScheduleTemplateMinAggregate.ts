import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.ObjectType("ActionScheduleTemplateMinAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  actId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  scheduleTemplateId!: string | null;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: true,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  quantity!: number | null;
}
