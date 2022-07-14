import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BeliefCount", {
  isAbstract: true,
})
export class BeliefCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  belief!: number;
}
