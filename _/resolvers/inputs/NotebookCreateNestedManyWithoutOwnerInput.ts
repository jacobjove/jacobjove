import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateManyOwnerInputEnvelope } from "../inputs/NotebookCreateManyOwnerInputEnvelope";
import { NotebookCreateOrConnectWithoutOwnerInput } from "../inputs/NotebookCreateOrConnectWithoutOwnerInput";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedManyWithoutOwnerInput", { isAbstract: true })
export class NotebookCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(() => [NotebookCreateWithoutOwnerInput], { nullable: true })
  create?: NotebookCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: NotebookCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereUniqueInput], { nullable: true })
  connect?: NotebookWhereUniqueInput[] | undefined;
}
