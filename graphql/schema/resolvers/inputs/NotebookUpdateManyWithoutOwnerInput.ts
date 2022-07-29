import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateManyOwnerInputEnvelope } from "../inputs/NotebookCreateManyOwnerInputEnvelope";
import { NotebookCreateOrConnectWithoutOwnerInput } from "../inputs/NotebookCreateOrConnectWithoutOwnerInput";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookScalarWhereInput } from "../inputs/NotebookScalarWhereInput";
import { NotebookUpdateManyWithWhereWithoutOwnerInput } from "../inputs/NotebookUpdateManyWithWhereWithoutOwnerInput";
import { NotebookUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/NotebookUpdateWithWhereUniqueWithoutOwnerInput";
import { NotebookUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/NotebookUpsertWithWhereUniqueWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateManyWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => [NotebookCreateWithoutOwnerInput], { nullable: true })
  create?: NotebookCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  upsert?: NotebookUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: NotebookCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereUniqueInput], { nullable: true })
  set?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereUniqueInput], { nullable: true })
  disconnect?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereUniqueInput], { nullable: true })
  delete?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereUniqueInput], { nullable: true })
  connect?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  update?: NotebookUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  updateMany?: NotebookUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookScalarWhereInput], { nullable: true })
  deleteMany?: NotebookScalarWhereInput[] | undefined;
}
