import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityUpdateWithoutActionRelationsInput } from "../inputs/IdentityUpdateWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityUpsertWithoutActionRelationsInput", { isAbstract: true })
export class IdentityUpsertWithoutActionRelationsInput {
  @TypeGraphQL.Field(() => IdentityUpdateWithoutActionRelationsInput, { nullable: false })
  update!: IdentityUpdateWithoutActionRelationsInput;

  @TypeGraphQL.Field(() => IdentityCreateWithoutActionRelationsInput, { nullable: false })
  create!: IdentityCreateWithoutActionRelationsInput;
}
