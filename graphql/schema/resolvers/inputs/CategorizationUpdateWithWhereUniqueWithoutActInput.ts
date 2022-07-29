import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateWithoutActInput } from "../inputs/CategorizationUpdateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateWithoutActInput, { nullable: false })
  data!: CategorizationUpdateWithoutActInput;
}
