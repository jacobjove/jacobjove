import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateManyActInput } from "../inputs/CategorizationCreateManyActInput";

@TypeGraphQL.InputType("CategorizationCreateManyActInputEnvelope", {
  isAbstract: true,
})
export class CategorizationCreateManyActInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategorizationCreateManyActInput], {
    nullable: false,
  })
  data!: CategorizationCreateManyActInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
