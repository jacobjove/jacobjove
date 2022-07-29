import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityUpdateWithoutUserInput } from "../inputs/IdentityUpdateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class IdentityUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityUpdateWithoutUserInput, { nullable: false })
  update!: IdentityUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => IdentityCreateWithoutUserInput, { nullable: false })
  create!: IdentityCreateWithoutUserInput;
}
