import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyInput } from "../../../inputs/ReadingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReadingArgs {
  @TypeGraphQL.Field(() => [ReadingCreateManyInput], { nullable: false })
  data!: ReadingCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
