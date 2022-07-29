import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AffectedRowsOutput", {
  isAbstract: true,
})
export class AffectedRowsOutput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  count!: number;
}
