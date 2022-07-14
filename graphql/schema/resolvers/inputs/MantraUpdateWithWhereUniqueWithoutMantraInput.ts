import * as TypeGraphQL from "type-graphql";
import { MantraUpdateWithoutMantraInput } from "../inputs/MantraUpdateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateWithWhereUniqueWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpdateWithWhereUniqueWithoutMantraInput {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: false,
  })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraUpdateWithoutMantraInput, {
    nullable: false,
  })
  data!: MantraUpdateWithoutMantraInput;
}
