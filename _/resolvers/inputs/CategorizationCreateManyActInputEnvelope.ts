import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyActInput } from "../inputs/CategorizationCreateManyActInput";

@TypeGraphQL.InputType("CategorizationCreateManyActInputEnvelope", { isAbstract: true })
export class CategorizationCreateManyActInputEnvelope {
  @TypeGraphQL.Field(() => [CategorizationCreateManyActInput], { nullable: false })
  data!: CategorizationCreateManyActInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
