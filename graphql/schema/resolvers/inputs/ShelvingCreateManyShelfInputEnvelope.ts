import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateManyShelfInput } from "../inputs/ShelvingCreateManyShelfInput";

@TypeGraphQL.InputType("ShelvingCreateManyShelfInputEnvelope", {
  isAbstract: true,
})
export class ShelvingCreateManyShelfInputEnvelope {
  @TypeGraphQL.Field((_type) => [ShelvingCreateManyShelfInput], {
    nullable: false,
  })
  data!: ShelvingCreateManyShelfInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
