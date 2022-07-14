import * as TypeGraphQL from "type-graphql";
import { IdentityCreateManyUserInput } from "../inputs/IdentityCreateManyUserInput";

@TypeGraphQL.InputType("IdentityCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class IdentityCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [IdentityCreateManyUserInput], {
    nullable: false,
  })
  data!: IdentityCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
