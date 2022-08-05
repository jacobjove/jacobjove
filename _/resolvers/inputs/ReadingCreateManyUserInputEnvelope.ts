import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyUserInput } from "../inputs/ReadingCreateManyUserInput";

@TypeGraphQL.InputType("ReadingCreateManyUserInputEnvelope", { isAbstract: true })
export class ReadingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [ReadingCreateManyUserInput], { nullable: false })
  data!: ReadingCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
