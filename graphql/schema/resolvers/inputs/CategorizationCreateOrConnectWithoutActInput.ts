import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateOrConnectWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, {
    nullable: false,
  })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategorizationCreateWithoutActInput, {
    nullable: false,
  })
  create!: CategorizationCreateWithoutActInput;
}
