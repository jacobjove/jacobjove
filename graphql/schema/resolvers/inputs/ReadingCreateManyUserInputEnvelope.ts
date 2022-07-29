import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyUserInput } from "../inputs/ReadingCreateManyUserInput";

@TypeGraphQL.InputType("ReadingCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class ReadingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ReadingCreateManyUserInput], { nullable: false })
  data!: ReadingCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
