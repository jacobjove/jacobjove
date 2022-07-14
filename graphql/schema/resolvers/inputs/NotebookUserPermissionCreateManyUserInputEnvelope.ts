import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateManyUserInput } from "../inputs/NotebookUserPermissionCreateManyUserInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateManyUserInput], {
    nullable: false,
  })
  data!: NotebookUserPermissionCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
