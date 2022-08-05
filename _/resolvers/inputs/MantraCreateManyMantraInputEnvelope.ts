import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyMantraInput } from "../inputs/MantraCreateManyMantraInput";

@TypeGraphQL.InputType("MantraCreateManyMantraInputEnvelope", { isAbstract: true })
export class MantraCreateManyMantraInputEnvelope {
  @TypeGraphQL.Field(() => [MantraCreateManyMantraInput], { nullable: false })
  data!: MantraCreateManyMantraInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
