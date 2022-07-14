import * as TypeGraphQL from "type-graphql";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserRelationFilter", {
  isAbstract: true,
})
export class UserRelationFilter {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  is?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  isNot?: UserWhereInput | undefined;
}
