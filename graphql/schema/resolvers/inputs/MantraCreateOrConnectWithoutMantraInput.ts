import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateOrConnectWithoutMantraInput", {
  isAbstract: true,
})
export class MantraCreateOrConnectWithoutMantraInput {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraCreateWithoutMantraInput, { nullable: false })
  create!: MantraCreateWithoutMantraInput;
}
