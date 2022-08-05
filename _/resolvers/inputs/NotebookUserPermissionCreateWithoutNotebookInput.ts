import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("NotebookUserPermissionCreateWithoutNotebookInput", { isAbstract: true })
export class NotebookUserPermissionCreateWithoutNotebookInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;
}
