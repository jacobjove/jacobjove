import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyUserInput } from "../inputs/IdentityCreateManyUserInput";

@TypeGraphQL.InputType("IdentityCreateManyUserInputEnvelope", { isAbstract: true })
export class IdentityCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [IdentityCreateManyUserInput], { nullable: false })
  data!: IdentityCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
