import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActWhereInput } from "../inputs/ActWhereInput";

@TypeGraphQL.InputType("ActRelationFilter", { isAbstract: true })
export class ActRelationFilter {
  @TypeGraphQL.Field(() => ActWhereInput, { nullable: true })
  is?: ActWhereInput | undefined;

  @TypeGraphQL.Field(() => ActWhereInput, { nullable: true })
  isNot?: ActWhereInput | undefined;
}
