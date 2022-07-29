import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyIdentityInput } from "../inputs/IdentityActRelationCreateManyIdentityInput";

@TypeGraphQL.InputType("IdentityActRelationCreateManyIdentityInputEnvelope", {
  isAbstract: true,
})
export class IdentityActRelationCreateManyIdentityInputEnvelope {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateManyIdentityInput], { nullable: false })
  data!: IdentityActRelationCreateManyIdentityInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
