import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInput } from "../inputs/ValueCreateManyUserInput";

@TypeGraphQL.InputType("ValueCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class ValueCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ValueCreateManyUserInput], { nullable: false })
  data!: ValueCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
