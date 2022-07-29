import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraUpdateWithoutUserInput } from "../inputs/MantraUpdateWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class MantraUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraUpdateWithoutUserInput, { nullable: false })
  data!: MantraUpdateWithoutUserInput;
}
