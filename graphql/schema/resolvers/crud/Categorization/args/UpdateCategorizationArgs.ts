import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateInput } from "../../../inputs/CategorizationUpdateInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategorizationArgs {
  @TypeGraphQL.Field(() => CategorizationUpdateInput, { nullable: false })
  data!: CategorizationUpdateInput;

  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;
}
