import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyBookInput } from "../inputs/ShelvingCreateManyBookInput";

@TypeGraphQL.InputType("ShelvingCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class ShelvingCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(() => [ShelvingCreateManyBookInput], { nullable: false })
  data!: ShelvingCreateManyBookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
