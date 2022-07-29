import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActWhereInput } from "../inputs/ActWhereInput";

@TypeGraphQL.InputType("ActListRelationFilter", {
  isAbstract: true,
})
export class ActListRelationFilter {
  @TypeGraphQL.Field((_type) => ActWhereInput, { nullable: true })
  every?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereInput, { nullable: true })
  some?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereInput, { nullable: true })
  none?: ActWhereInput | undefined;
}
