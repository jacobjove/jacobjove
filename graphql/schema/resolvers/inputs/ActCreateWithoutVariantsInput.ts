import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutVariantsInput } from "../inputs/ActCreateNestedOneWithoutVariantsInput";
import { ActionScheduleTemplateCreateNestedManyWithoutActInput } from "../inputs/ActionScheduleTemplateCreateNestedManyWithoutActInput";
import { CategorizationCreateNestedManyWithoutActInput } from "../inputs/CategorizationCreateNestedManyWithoutActInput";
import { HabitCreateNestedManyWithoutActInput } from "../inputs/HabitCreateNestedManyWithoutActInput";
import { IdentityActRelationCreateNestedManyWithoutActionInput } from "../inputs/IdentityActRelationCreateNestedManyWithoutActionInput";
import { MetricApplicationCreateNestedManyWithoutActInput } from "../inputs/MetricApplicationCreateNestedManyWithoutActInput";

@TypeGraphQL.InputType("ActCreateWithoutVariantsInput", {
  isAbstract: true,
})
export class ActCreateWithoutVariantsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isPublic?: boolean | undefined;

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

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutVariantsInput, {
    nullable: true,
  })
  parent?: ActCreateNestedOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  habits?: HabitCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  metricApplications?: MetricApplicationCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationCreateNestedManyWithoutActionInput, {
    nullable: true,
  })
  identityRelations?: IdentityActRelationCreateNestedManyWithoutActionInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  scheduleTemplates?: ActionScheduleTemplateCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  categorizations?: CategorizationCreateNestedManyWithoutActInput | undefined;
}
