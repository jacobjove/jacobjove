import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { IdentityCreateNestedOneWithoutActionRelationsInput } from "../inputs/IdentityCreateNestedOneWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationCreateWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateWithoutActionInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => IdentityCreateNestedOneWithoutActionRelationsInput, {
    nullable: false,
  })
  identity!: IdentityCreateNestedOneWithoutActionRelationsInput;
}
