import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyIdentityInput } from "../inputs/IdentityActRelationCreateManyIdentityInput";

@TypeGraphQL.InputType("IdentityActRelationCreateManyIdentityInputEnvelope", {
  isAbstract: true,
})
export class IdentityActRelationCreateManyIdentityInputEnvelope {
  @TypeGraphQL.Field((_type) => [IdentityActRelationCreateManyIdentityInput], { nullable: false })
  data!: IdentityActRelationCreateManyIdentityInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
