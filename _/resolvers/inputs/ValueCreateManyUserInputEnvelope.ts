import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInput } from "../inputs/ValueCreateManyUserInput";

@TypeGraphQL.InputType("ValueCreateManyUserInputEnvelope", { isAbstract: true })
export class ValueCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [ValueCreateManyUserInput], { nullable: false })
  data!: ValueCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
