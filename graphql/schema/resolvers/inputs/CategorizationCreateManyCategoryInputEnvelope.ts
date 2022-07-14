import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateManyCategoryInput } from "../inputs/CategorizationCreateManyCategoryInput";

@TypeGraphQL.InputType("CategorizationCreateManyCategoryInputEnvelope", {
  isAbstract: true,
})
export class CategorizationCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategorizationCreateManyCategoryInput], {
    nullable: false,
  })
  data!: CategorizationCreateManyCategoryInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
