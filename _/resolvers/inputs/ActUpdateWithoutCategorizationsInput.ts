import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutActInput";
import { ActUpdateManyWithoutParentInput } from "../inputs/ActUpdateManyWithoutParentInput";
import { ActUpdateOneWithoutVariantsInput } from "../inputs/ActUpdateOneWithoutVariantsInput";
import { HabitUpdateManyWithoutActInput } from "../inputs/HabitUpdateManyWithoutActInput";
import { IdentityActRelationUpdateManyWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithoutActionInput";
import { MetricApplicationUpdateManyWithoutActInput } from "../inputs/MetricApplicationUpdateManyWithoutActInput";

@TypeGraphQL.InputType("ActUpdateWithoutCategorizationsInput", { isAbstract: true })
export class ActUpdateWithoutCategorizationsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneWithoutVariantsInput, { nullable: true })
  parent?: ActUpdateOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateManyWithoutParentInput, { nullable: true })
  variants?: ActUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateManyWithoutActInput, { nullable: true })
  habits?: HabitUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationUpdateManyWithoutActInput, { nullable: true })
  metricApplications?: MetricApplicationUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateManyWithoutActionInput, { nullable: true })
  identityRelations?: IdentityActRelationUpdateManyWithoutActionInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateManyWithoutActInput, { nullable: true })
  scheduleTemplates?: ActionScheduleTemplateUpdateManyWithoutActInput | undefined;
}
