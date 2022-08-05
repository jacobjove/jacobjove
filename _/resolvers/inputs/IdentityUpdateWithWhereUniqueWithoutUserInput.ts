import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityUpdateWithoutUserInput } from "../inputs/IdentityUpdateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpdateWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class IdentityUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityUpdateWithoutUserInput, { nullable: false })
  data!: IdentityUpdateWithoutUserInput;
}
