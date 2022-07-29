import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteWhereInput } from "../inputs/NoteWhereInput";

@TypeGraphQL.InputType("NoteListRelationFilter", {
  isAbstract: true,
})
export class NoteListRelationFilter {
  @TypeGraphQL.Field((_type) => NoteWhereInput, { nullable: true })
  every?: NoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NoteWhereInput, { nullable: true })
  some?: NoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NoteWhereInput, { nullable: true })
  none?: NoteWhereInput | undefined;
}
