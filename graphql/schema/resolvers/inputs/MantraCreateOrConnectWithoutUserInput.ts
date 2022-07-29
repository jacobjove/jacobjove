import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateWithoutUserInput } from "../inputs/MantraCreateWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class MantraCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraCreateWithoutUserInput, { nullable: false })
  create!: MantraCreateWithoutUserInput;
}
