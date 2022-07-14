import * as TypeGraphQL from "type-graphql";
import { MantraCreateManyUserInput } from "../inputs/MantraCreateManyUserInput";

@TypeGraphQL.InputType("MantraCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class MantraCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [MantraCreateManyUserInput], {
    nullable: false,
  })
  data!: MantraCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
