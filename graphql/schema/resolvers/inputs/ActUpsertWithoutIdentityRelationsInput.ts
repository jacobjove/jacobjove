import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActUpdateWithoutIdentityRelationsInput } from "../inputs/ActUpdateWithoutIdentityRelationsInput";

@TypeGraphQL.InputType("ActUpsertWithoutIdentityRelationsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutIdentityRelationsInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutIdentityRelationsInput, { nullable: false })
  update!: ActUpdateWithoutIdentityRelationsInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutIdentityRelationsInput, { nullable: false })
  create!: ActCreateWithoutIdentityRelationsInput;
}
