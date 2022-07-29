import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("TaskUserIdParentIdRankCompoundUniqueInput", {
  isAbstract: true,
})
export class TaskUserIdParentIdRankCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  parentId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rank!: number;
}
