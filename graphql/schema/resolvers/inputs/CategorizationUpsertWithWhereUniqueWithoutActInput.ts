import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationUpdateWithoutActInput } from "../inputs/CategorizationUpdateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationUpdateWithoutActInput, { nullable: false })
  update!: CategorizationUpdateWithoutActInput;

  @TypeGraphQL.Field(() => CategorizationCreateWithoutActInput, { nullable: false })
  create!: CategorizationCreateWithoutActInput;
}
