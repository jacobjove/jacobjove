import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { MetricRecordCreateNestedManyWithoutActionInput } from "../inputs/MetricRecordCreateNestedManyWithoutActionInput";

@TypeGraphQL.InputType("ActionCreateWithoutHabitInput", {
  isAbstract: true,
})
export class ActionCreateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  end!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateNestedManyWithoutActionInput, {
    nullable: true,
  })
  metricRecords?: MetricRecordCreateNestedManyWithoutActionInput | undefined;
}
