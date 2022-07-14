import * as TypeGraphQL from "type-graphql";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityUpdateWithoutActionRelationsInput } from "../inputs/IdentityUpdateWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityUpsertWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityUpsertWithoutActionRelationsInput {
  @TypeGraphQL.Field((_type) => IdentityUpdateWithoutActionRelationsInput, {
    nullable: false,
  })
  update!: IdentityUpdateWithoutActionRelationsInput;

  @TypeGraphQL.Field((_type) => IdentityCreateWithoutActionRelationsInput, {
    nullable: false,
  })
  create!: IdentityCreateWithoutActionRelationsInput;
}
