import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { IdentityCreateNestedOneWithoutActionRelationsInput } from "../inputs/IdentityCreateNestedOneWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationCreateWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateWithoutActionInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateNestedOneWithoutActionRelationsInput, {
    nullable: false,
  })
  identity!: IdentityCreateNestedOneWithoutActionRelationsInput;
}
