import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateOrConnectWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationCreateWithoutActInput, { nullable: false })
  create!: CategorizationCreateWithoutActInput;
}
