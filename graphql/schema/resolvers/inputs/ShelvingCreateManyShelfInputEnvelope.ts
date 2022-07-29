import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyShelfInput } from "../inputs/ShelvingCreateManyShelfInput";

@TypeGraphQL.InputType("ShelvingCreateManyShelfInputEnvelope", {
  isAbstract: true,
})
export class ShelvingCreateManyShelfInputEnvelope {
  @TypeGraphQL.Field(() => [ShelvingCreateManyShelfInput], { nullable: false })
  data!: ShelvingCreateManyShelfInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
