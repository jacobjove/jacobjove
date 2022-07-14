import * as TypeGraphQL from "type-graphql";
import { ReadingCreateManyInput } from "../../../inputs/ReadingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReadingArgs {
  @TypeGraphQL.Field((_type) => [ReadingCreateManyInput], {
    nullable: false,
  })
  data!: ReadingCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
