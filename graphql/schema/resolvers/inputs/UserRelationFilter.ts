import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserRelationFilter", {
  isAbstract: true,
})
export class UserRelationFilter {
  @TypeGraphQL.Field(() => UserWhereInput, { nullable: true })
  is?: UserWhereInput | undefined;

  @TypeGraphQL.Field(() => UserWhereInput, { nullable: true })
  isNot?: UserWhereInput | undefined;
}
