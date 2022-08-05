import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateOrConnectWithoutNotesInput } from "../inputs/NotebookCreateOrConnectWithoutNotesInput";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookUpdateWithoutNotesInput } from "../inputs/NotebookUpdateWithoutNotesInput";
import { NotebookUpsertWithoutNotesInput } from "../inputs/NotebookUpsertWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateOneRequiredWithoutNotesInput", { isAbstract: true })
export class NotebookUpdateOneRequiredWithoutNotesInput {
  @TypeGraphQL.Field(() => NotebookCreateWithoutNotesInput, { nullable: true })
  create?: NotebookCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field(() => NotebookCreateOrConnectWithoutNotesInput, { nullable: true })
  connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpsertWithoutNotesInput, { nullable: true })
  upsert?: NotebookUpsertWithoutNotesInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: true })
  connect?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateWithoutNotesInput, { nullable: true })
  update?: NotebookUpdateWithoutNotesInput | undefined;
}
