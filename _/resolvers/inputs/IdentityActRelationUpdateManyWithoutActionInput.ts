import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyActionInputEnvelope } from "../inputs/IdentityActRelationCreateManyActionInputEnvelope";
import { IdentityActRelationCreateOrConnectWithoutActionInput } from "../inputs/IdentityActRelationCreateOrConnectWithoutActionInput";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationScalarWhereInput } from "../inputs/IdentityActRelationScalarWhereInput";
import { IdentityActRelationUpdateManyWithWhereWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithWhereWithoutActionInput";
import { IdentityActRelationUpdateWithWhereUniqueWithoutActionInput } from "../inputs/IdentityActRelationUpdateWithWhereUniqueWithoutActionInput";
import { IdentityActRelationUpsertWithWhereUniqueWithoutActionInput } from "../inputs/IdentityActRelationUpsertWithWhereUniqueWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyWithoutActionInput", { isAbstract: true })
export class IdentityActRelationUpdateManyWithoutActionInput {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateWithoutActionInput], { nullable: true })
  create?: IdentityActRelationCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationCreateOrConnectWithoutActionInput], {
    nullable: true,
  })
  connectOrCreate?: IdentityActRelationCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpsertWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  upsert?: IdentityActRelationUpsertWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationCreateManyActionInputEnvelope, {
    nullable: true,
  })
  createMany?: IdentityActRelationCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  set?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  disconnect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  delete?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  connect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpdateWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  update?: IdentityActRelationUpdateWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpdateManyWithWhereWithoutActionInput], {
    nullable: true,
  })
  updateMany?: IdentityActRelationUpdateManyWithWhereWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereInput], { nullable: true })
  deleteMany?: IdentityActRelationScalarWhereInput[] | undefined;
}
