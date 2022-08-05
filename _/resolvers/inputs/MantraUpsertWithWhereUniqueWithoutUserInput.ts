import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateWithoutUserInput } from "../inputs/MantraCreateWithoutUserInput";
import { MantraUpdateWithoutUserInput } from "../inputs/MantraUpdateWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpsertWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class MantraUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field(() => MantraUpdateWithoutUserInput, { nullable: false })
  update!: MantraUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => MantraCreateWithoutUserInput, { nullable: false })
  create!: MantraCreateWithoutUserInput;
}
