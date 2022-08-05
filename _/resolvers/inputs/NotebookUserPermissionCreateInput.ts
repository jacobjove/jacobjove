import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutUserPermissionsInput } from "../inputs/NotebookCreateNestedOneWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateInput", { isAbstract: true })
export class NotebookUserPermissionCreateInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => NotebookCreateNestedOneWithoutUserPermissionsInput, { nullable: false })
  notebook!: NotebookCreateNestedOneWithoutUserPermissionsInput;
}
