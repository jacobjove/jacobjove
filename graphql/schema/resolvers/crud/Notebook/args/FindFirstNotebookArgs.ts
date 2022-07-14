import * as TypeGraphQL from "type-graphql";
import { NotebookScalarFieldEnum } from "../../../../enums/NotebookScalarFieldEnum";
import { NotebookOrderByWithRelationInput } from "../../../inputs/NotebookOrderByWithRelationInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  where?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NotebookOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: NotebookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: true,
  })
  cursor?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [NotebookScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "ownerId"
        | "title"
        | "isPublic"
        | "description"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
