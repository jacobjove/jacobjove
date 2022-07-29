import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraUpdateWithoutMantraInput } from "../inputs/MantraUpdateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateWithWhereUniqueWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpdateWithWhereUniqueWithoutMantraInput {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field(() => MantraUpdateWithoutMantraInput, { nullable: false })
  data!: MantraUpdateWithoutMantraInput;
}
