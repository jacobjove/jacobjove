import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutIdentityRelationsInput } from "../inputs/ActCreateNestedOneWithoutIdentityRelationsInput";
import { IdentityCreateNestedOneWithoutActionRelationsInput } from "../inputs/IdentityCreateNestedOneWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationCreateInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateNestedOneWithoutActionRelationsInput, {
    nullable: false,
  })
  identity!: IdentityCreateNestedOneWithoutActionRelationsInput;

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutIdentityRelationsInput, {
    nullable: false,
  })
  action!: ActCreateNestedOneWithoutIdentityRelationsInput;
}
