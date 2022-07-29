import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityUpdateWithoutUserInput } from "../inputs/IdentityUpdateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class IdentityUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityUpdateWithoutUserInput, { nullable: false })
  update!: IdentityUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => IdentityCreateWithoutUserInput, { nullable: false })
  create!: IdentityCreateWithoutUserInput;
}
