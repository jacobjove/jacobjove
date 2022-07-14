import * as TypeGraphQL from "type-graphql";
import { NotebookCreateManyOwnerInputEnvelope } from "../inputs/NotebookCreateManyOwnerInputEnvelope";
import { NotebookCreateOrConnectWithoutOwnerInput } from "../inputs/NotebookCreateOrConnectWithoutOwnerInput";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedManyWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => [NotebookCreateWithoutOwnerInput], {
    nullable: true,
  })
  create?: NotebookCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookCreateOrConnectWithoutOwnerInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateManyOwnerInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereUniqueInput], {
    nullable: true,
  })
  connect?: NotebookWhereUniqueInput[] | undefined;
}
