import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateInput } from "../../../inputs/CategorizationUpdateInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationUpdateInput, { nullable: false })
  data!: CategorizationUpdateInput;

  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;
}
