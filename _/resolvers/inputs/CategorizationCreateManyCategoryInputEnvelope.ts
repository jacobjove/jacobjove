import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyCategoryInput } from "../inputs/CategorizationCreateManyCategoryInput";

@TypeGraphQL.InputType("CategorizationCreateManyCategoryInputEnvelope", { isAbstract: true })
export class CategorizationCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(() => [CategorizationCreateManyCategoryInput], { nullable: false })
  data!: CategorizationCreateManyCategoryInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
