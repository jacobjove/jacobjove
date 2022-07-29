import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BeliefCount", {
  isAbstract: true,
})
export class BeliefCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  belief!: number;
}
