import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteOrderByWithRelationInput } from "../../../inputs/NoteOrderByWithRelationInput";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNoteArgs {
  @TypeGraphQL.Field(() => NoteWhereInput, { nullable: true })
  where?: NoteWhereInput | undefined;

  @TypeGraphQL.Field(() => [NoteOrderByWithRelationInput], { nullable: true })
  orderBy?: NoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: true })
  cursor?: NoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
