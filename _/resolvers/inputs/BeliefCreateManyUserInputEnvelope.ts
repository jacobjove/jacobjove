import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateManyUserInput } from "../inputs/BeliefCreateManyUserInput";

@TypeGraphQL.InputType("BeliefCreateManyUserInputEnvelope", { isAbstract: true })
export class BeliefCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [BeliefCreateManyUserInput], { nullable: false })
  data!: BeliefCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
