import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyBookInput } from "../inputs/ReadingCreateManyBookInput";

@TypeGraphQL.InputType("ReadingCreateManyBookInputEnvelope", { isAbstract: true })
export class ReadingCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(() => [ReadingCreateManyBookInput], { nullable: false })
  data!: ReadingCreateManyBookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
