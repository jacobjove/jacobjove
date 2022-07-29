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
  @TypeGraphQL.Field(() => [NotebookCreateWithoutOwnerInput], { nullable: true })
  create?: NotebookCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  upsert?: NotebookUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: NotebookCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereUniqueInput], { nullable: true })
  set?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereUniqueInput], { nullable: true })
  disconnect?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereUniqueInput], { nullable: true })
  delete?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereUniqueInput], { nullable: true })
  connect?: NotebookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  update?: NotebookUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  updateMany?: NotebookUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarWhereInput], { nullable: true })
  deleteMany?: NotebookScalarWhereInput[] | undefined;
}
