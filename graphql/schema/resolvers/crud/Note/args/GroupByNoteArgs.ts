import * as TypeGraphQL from "type-graphql";
import { NoteScalarFieldEnum } from "../../../../enums/NoteScalarFieldEnum";
import { NoteOrderByWithAggregationInput } from "../../../inputs/NoteOrderByWithAggregationInput";
import { NoteScalarWhereWithAggregatesInput } from "../../../inputs/NoteScalarWhereWithAggregatesInput";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByNoteArgs {
  @TypeGraphQL.Field((_type) => NoteWhereInput, {
    nullable: true,
  })
  where?: NoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NoteOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: NoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "notebookId" | "title" | "body" | "isPublic" | "createdAt" | "updatedAt" | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => NoteScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: NoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
