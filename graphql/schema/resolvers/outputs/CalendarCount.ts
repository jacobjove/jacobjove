import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarCount", {
  isAbstract: true,
})
export class CalendarCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  events!: number;
}
