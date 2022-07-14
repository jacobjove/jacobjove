import * as TypeGraphQL from "type-graphql";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraUpdateWithoutMantraInput } from "../inputs/MantraUpdateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpsertWithWhereUniqueWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpsertWithWhereUniqueWithoutMantraInput {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: false,
  })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraUpdateWithoutMantraInput, {
    nullable: false,
  })
  update!: MantraUpdateWithoutMantraInput;

  @TypeGraphQL.Field((_type) => MantraCreateWithoutMantraInput, {
    nullable: false,
  })
  create!: MantraCreateWithoutMantraInput;
}
