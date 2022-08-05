import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookScalarFieldEnum } from "../../../../enums/NotebookScalarFieldEnum";
import { NotebookOrderByWithRelationInput } from "../../../inputs/NotebookOrderByWithRelationInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserNotebooksArgs {
  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  where?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field(() => [NotebookOrderByWithRelationInput], { nullable: true })
  orderBy?: NotebookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: true })
  cursor?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "ownerId"
        | "title"
        | "public"
        | "description"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
