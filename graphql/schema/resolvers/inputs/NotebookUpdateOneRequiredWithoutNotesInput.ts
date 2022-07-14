import * as TypeGraphQL from "type-graphql";
import { NotebookCreateOrConnectWithoutNotesInput } from "../inputs/NotebookCreateOrConnectWithoutNotesInput";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookUpdateWithoutNotesInput } from "../inputs/NotebookUpdateWithoutNotesInput";
import { NotebookUpsertWithoutNotesInput } from "../inputs/NotebookUpsertWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateOneRequiredWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookUpdateOneRequiredWithoutNotesInput {
  @TypeGraphQL.Field((_type) => NotebookCreateWithoutNotesInput, {
    nullable: true,
  })
  create?: NotebookCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateOrConnectWithoutNotesInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpsertWithoutNotesInput, {
    nullable: true,
  })
  upsert?: NotebookUpsertWithoutNotesInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: true,
  })
  connect?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutNotesInput, {
    nullable: true,
  })
  update?: NotebookUpdateWithoutNotesInput | undefined;
}
