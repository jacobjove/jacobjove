import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyBookInput } from "../inputs/ShelvingCreateManyBookInput";

@TypeGraphQL.InputType("ShelvingCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class ShelvingCreateManyBookInputEnvelope {
  @TypeGraphQL.Field((_type) => [ShelvingCreateManyBookInput], { nullable: false })
  data!: ShelvingCreateManyBookInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
