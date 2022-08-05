import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateInput } from "../inputs/IdentityCreateInput";
import { IdentityCreateOrConnectWithoutIdentitiesInput } from "../inputs/IdentityCreateOrConnectWithoutIdentitiesInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedOneWithoutIdentitiesInput", { isAbstract: true })
export class IdentityCreateNestedOneWithoutIdentitiesInput {
  @TypeGraphQL.Field(() => IdentityCreateInput, { nullable: true })
  create?: IdentityCreateInput | undefined;

  @TypeGraphQL.Field(() => IdentityCreateOrConnectWithoutIdentitiesInput, { nullable: true })
  connectOrCreate?: IdentityCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: true })
  connect?: IdentityWhereUniqueInput | undefined;
}
