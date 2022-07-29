import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyActionInput } from "../inputs/IdentityActRelationCreateManyActionInput";

@TypeGraphQL.InputType("IdentityActRelationCreateManyActionInputEnvelope", {
  isAbstract: true,
})
export class IdentityActRelationCreateManyActionInputEnvelope {
  @TypeGraphQL.Field((_type) => [IdentityActRelationCreateManyActionInput], { nullable: false })
  data!: IdentityActRelationCreateManyActionInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
