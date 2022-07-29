import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateInput } from "../inputs/MantraCreateInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateOrConnectInput", {
  isAbstract: true,
})
export class MantraCreateOrConnectInput {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field(() => MantraCreateInput, { nullable: false })
  create!: MantraCreateInput;
}
