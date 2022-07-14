import * as TypeGraphQL from "type-graphql";
import { IdentityCreateInput } from "../inputs/IdentityCreateInput";
import { IdentityCreateOrConnectWithoutIdentitiesInput } from "../inputs/IdentityCreateOrConnectWithoutIdentitiesInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedOneWithoutIdentitiesInput", {
  isAbstract: true,
})
export class IdentityCreateNestedOneWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => IdentityCreateInput, {
    nullable: true,
  })
  create?: IdentityCreateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateOrConnectWithoutIdentitiesInput, {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, {
    nullable: true,
  })
  connect?: IdentityWhereUniqueInput | undefined;
}
