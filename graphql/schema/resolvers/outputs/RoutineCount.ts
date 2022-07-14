import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("RoutineCount", {
  isAbstract: true,
})
export class RoutineCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  habits!: number;
}
