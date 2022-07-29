import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineCount", {
  isAbstract: true,
})
export class RoutineCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  habits!: number;
}
