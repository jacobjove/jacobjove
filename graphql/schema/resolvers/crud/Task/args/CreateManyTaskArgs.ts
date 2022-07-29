import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyInput } from "../../../inputs/TaskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskArgs {
  @TypeGraphQL.Field(() => [TaskCreateManyInput], { nullable: false })
  data!: TaskCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
