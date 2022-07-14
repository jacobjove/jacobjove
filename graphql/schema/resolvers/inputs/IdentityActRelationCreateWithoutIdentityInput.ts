import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutIdentityRelationsInput } from "../inputs/ActCreateNestedOneWithoutIdentityRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationCreateInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutIdentityRelationsInput, {
    nullable: false,
  })
  action!: ActCreateNestedOneWithoutIdentityRelationsInput;
}
