import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateManyOwnerInput } from "../inputs/NotebookCreateManyOwnerInput";

@TypeGraphQL.InputType("NotebookCreateManyOwnerInputEnvelope", { isAbstract: true })
export class NotebookCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(() => [NotebookCreateManyOwnerInput], { nullable: false })
  data!: NotebookCreateManyOwnerInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
