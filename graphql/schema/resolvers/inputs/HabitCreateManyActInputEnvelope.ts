import * as TypeGraphQL from "type-graphql";
import { HabitCreateManyActInput } from "../inputs/HabitCreateManyActInput";

@TypeGraphQL.InputType("HabitCreateManyActInputEnvelope", {
  isAbstract: true,
})
export class HabitCreateManyActInputEnvelope {
  @TypeGraphQL.Field((_type) => [HabitCreateManyActInput], {
    nullable: false,
  })
  data!: HabitCreateManyActInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
