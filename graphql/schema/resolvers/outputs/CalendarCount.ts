import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("CalendarCount", {
  isAbstract: true,
})
export class CalendarCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  events!: number;
}
