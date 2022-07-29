import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationWhereInput } from "../inputs/CategorizationWhereInput";

@TypeGraphQL.InputType("CategorizationListRelationFilter", {
  isAbstract: true,
})
export class CategorizationListRelationFilter {
  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  every?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  some?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  none?: CategorizationWhereInput | undefined;
}
