import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyUserInput } from "../inputs/MantraCreateManyUserInput";

@TypeGraphQL.InputType("MantraCreateManyUserInputEnvelope", { isAbstract: true })
export class MantraCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [MantraCreateManyUserInput], { nullable: false })
  data!: MantraCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
