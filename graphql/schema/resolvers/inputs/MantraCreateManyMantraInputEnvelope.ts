import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyMantraInput } from "../inputs/MantraCreateManyMantraInput";

@TypeGraphQL.InputType("MantraCreateManyMantraInputEnvelope", {
  isAbstract: true,
})
export class MantraCreateManyMantraInputEnvelope {
  @TypeGraphQL.Field((_type) => [MantraCreateManyMantraInput], { nullable: false })
  data!: MantraCreateManyMantraInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
