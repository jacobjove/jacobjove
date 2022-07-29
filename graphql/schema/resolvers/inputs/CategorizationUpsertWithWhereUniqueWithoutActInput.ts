import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationUpdateWithoutActInput } from "../inputs/CategorizationUpdateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateWithoutActInput, { nullable: false })
  update!: CategorizationUpdateWithoutActInput;

  @TypeGraphQL.Field((_type) => CategorizationCreateWithoutActInput, { nullable: false })
  create!: CategorizationCreateWithoutActInput;
}
