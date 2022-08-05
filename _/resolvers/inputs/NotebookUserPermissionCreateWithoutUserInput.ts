import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutUserPermissionsInput } from "../inputs/NotebookCreateNestedOneWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateWithoutUserInput", { isAbstract: true })
export class NotebookUserPermissionCreateWithoutUserInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => NotebookCreateNestedOneWithoutUserPermissionsInput, { nullable: false })
  notebook!: NotebookCreateNestedOneWithoutUserPermissionsInput;
}
