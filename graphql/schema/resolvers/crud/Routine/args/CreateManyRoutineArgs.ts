import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateManyInput } from "../../../inputs/RoutineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRoutineArgs {
  @TypeGraphQL.Field(() => [RoutineCreateManyInput], { nullable: false })
  data!: RoutineCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
