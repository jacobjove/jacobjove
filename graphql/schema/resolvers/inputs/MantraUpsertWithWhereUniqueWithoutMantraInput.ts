import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraUpdateWithoutMantraInput } from "../inputs/MantraUpdateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpsertWithWhereUniqueWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpsertWithWhereUniqueWithoutMantraInput {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field(() => MantraUpdateWithoutMantraInput, { nullable: false })
  update!: MantraUpdateWithoutMantraInput;

  @TypeGraphQL.Field(() => MantraCreateWithoutMantraInput, { nullable: false })
  create!: MantraCreateWithoutMantraInput;
}
