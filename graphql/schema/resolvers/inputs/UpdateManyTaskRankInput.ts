import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("UpdateManyTaskRankInput", {
  isAbstract: true,
})
export class UpdateManyTaskRankInput {
  @TypeGraphQL.Field((_type) => String)
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int)
  rank!: number;
}
