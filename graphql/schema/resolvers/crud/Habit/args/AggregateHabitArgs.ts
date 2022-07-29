import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitOrderByWithRelationInput } from "../../../inputs/HabitOrderByWithRelationInput";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHabitArgs {
  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  where?: HabitWhereInput | undefined;

  @TypeGraphQL.Field(() => [HabitOrderByWithRelationInput], { nullable: true })
  orderBy?: HabitOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  cursor?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
