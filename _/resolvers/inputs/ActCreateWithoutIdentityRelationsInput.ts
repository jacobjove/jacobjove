import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedManyWithoutParentInput } from "../inputs/ActCreateNestedManyWithoutParentInput";
import { ActCreateNestedOneWithoutVariantsInput } from "../inputs/ActCreateNestedOneWithoutVariantsInput";
import { ActionScheduleTemplateCreateNestedManyWithoutActInput } from "../inputs/ActionScheduleTemplateCreateNestedManyWithoutActInput";
import { CategorizationCreateNestedManyWithoutActInput } from "../inputs/CategorizationCreateNestedManyWithoutActInput";
import { HabitCreateNestedManyWithoutActInput } from "../inputs/HabitCreateNestedManyWithoutActInput";
import { MetricApplicationCreateNestedManyWithoutActInput } from "../inputs/MetricApplicationCreateNestedManyWithoutActInput";

@TypeGraphQL.InputType("ActCreateWithoutIdentityRelationsInput", { isAbstract: true })
export class ActCreateWithoutIdentityRelationsInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutVariantsInput, { nullable: true })
  parent?: ActCreateNestedOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedManyWithoutParentInput, { nullable: true })
  variants?: ActCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateNestedManyWithoutActInput, { nullable: true })
  habits?: HabitCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  metricApplications?: MetricApplicationCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateNestedManyWithoutActInput, {
    nullable: true,
  })
  scheduleTemplates?: ActionScheduleTemplateCreateNestedManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateNestedManyWithoutActInput, { nullable: true })
  categorizations?: CategorizationCreateNestedManyWithoutActInput | undefined;
}
