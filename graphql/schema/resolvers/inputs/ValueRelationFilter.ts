import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueWhereInput } from "../inputs/ValueWhereInput";

@TypeGraphQL.InputType("ValueRelationFilter", {
  isAbstract: true,
})
export class ValueRelationFilter {
  @TypeGraphQL.Field(() => ValueWhereInput, { nullable: true })
  is?: ValueWhereInput | undefined;

  @TypeGraphQL.Field(() => ValueWhereInput, { nullable: true })
  isNot?: ValueWhereInput | undefined;
}
