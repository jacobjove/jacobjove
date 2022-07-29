import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarCount", {
  isAbstract: true,
})
export class CalendarCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  events!: number;
}
