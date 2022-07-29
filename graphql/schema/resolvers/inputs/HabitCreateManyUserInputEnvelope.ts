import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyUserInput } from "../inputs/HabitCreateManyUserInput";

@TypeGraphQL.InputType("HabitCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class HabitCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [HabitCreateManyUserInput], { nullable: false })
  data!: HabitCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
