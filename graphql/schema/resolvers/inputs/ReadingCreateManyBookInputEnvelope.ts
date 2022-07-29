import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyBookInput } from "../inputs/ReadingCreateManyBookInput";

@TypeGraphQL.InputType("ReadingCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class ReadingCreateManyBookInputEnvelope {
  @TypeGraphQL.Field((_type) => [ReadingCreateManyBookInput], { nullable: false })
  data!: ReadingCreateManyBookInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
