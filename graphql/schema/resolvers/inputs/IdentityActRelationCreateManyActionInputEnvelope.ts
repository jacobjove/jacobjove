import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyActionInput } from "../inputs/IdentityActRelationCreateManyActionInput";

@TypeGraphQL.InputType("IdentityActRelationCreateManyActionInputEnvelope", {
  isAbstract: true,
})
export class IdentityActRelationCreateManyActionInputEnvelope {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateManyActionInput], { nullable: false })
  data!: IdentityActRelationCreateManyActionInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
