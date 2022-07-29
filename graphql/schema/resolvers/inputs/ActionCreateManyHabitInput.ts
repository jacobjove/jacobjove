import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ActionCreateManyHabitInput", {
  isAbstract: true,
})
export class ActionCreateManyHabitInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
