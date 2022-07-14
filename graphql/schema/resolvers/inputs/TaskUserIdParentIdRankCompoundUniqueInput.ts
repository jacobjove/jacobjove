import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("TaskUserIdParentIdRankCompoundUniqueInput", {
  isAbstract: true,
})
export class TaskUserIdParentIdRankCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  parentId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  rank!: number;
}
