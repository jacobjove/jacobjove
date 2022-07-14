import * as TypeGraphQL from "type-graphql";
import { HabitCreateManyUserInput } from "../inputs/HabitCreateManyUserInput";

@TypeGraphQL.InputType("HabitCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class HabitCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [HabitCreateManyUserInput], {
    nullable: false,
  })
  data!: HabitCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
