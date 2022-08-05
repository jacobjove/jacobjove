import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateWithoutActInput } from "../inputs/CategorizationUpdateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateWithWhereUniqueWithoutActInput", { isAbstract: true })
export class CategorizationUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationUpdateWithoutActInput, { nullable: false })
  data!: CategorizationUpdateWithoutActInput;
}
