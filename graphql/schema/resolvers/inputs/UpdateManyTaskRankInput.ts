import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("UpdateManyTaskRankInput", {
  isAbstract: true,
})
export class UpdateManyTaskRankInput {
  @TypeGraphQL.Field(() => String)
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int)
  rank!: number;
}
