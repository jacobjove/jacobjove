import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ShelvingShelfIdPositionCompoundUniqueInput", {
  isAbstract: true,
})
export class ShelvingShelfIdPositionCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;
}
