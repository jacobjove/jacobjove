import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyUserInput } from "../inputs/NotebookUserPermissionCreateManyUserInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateManyUserInput], { nullable: false })
  data!: NotebookUserPermissionCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
