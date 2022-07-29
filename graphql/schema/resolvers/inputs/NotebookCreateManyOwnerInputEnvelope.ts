import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateManyOwnerInput } from "../inputs/NotebookCreateManyOwnerInput";

@TypeGraphQL.InputType("NotebookCreateManyOwnerInputEnvelope", {
  isAbstract: true,
})
export class NotebookCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field((_type) => [NotebookCreateManyOwnerInput], { nullable: false })
  data!: NotebookCreateManyOwnerInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
