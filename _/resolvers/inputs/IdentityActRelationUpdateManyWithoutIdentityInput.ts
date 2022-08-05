import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateInput } from "../inputs/IdentityActRelationCreateInput";
import { IdentityActRelationCreateManyIdentityInputEnvelope } from "../inputs/IdentityActRelationCreateManyIdentityInputEnvelope";
import { IdentityActRelationCreateOrConnectWithoutIdentityInput } from "../inputs/IdentityActRelationCreateOrConnectWithoutIdentityInput";
import { IdentityActRelationScalarWhereInput } from "../inputs/IdentityActRelationScalarWhereInput";
import { IdentityActRelationUpdateManyWithWhereWithoutIdentityInput } from "../inputs/IdentityActRelationUpdateManyWithWhereWithoutIdentityInput";
import { IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput } from "../inputs/IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput";
import { IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput } from "../inputs/IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyMutationInput", { isAbstract: true })
export class IdentityActRelationUpdateManyMutationInput {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateInput], { nullable: true })
  create?: IdentityActRelationCreateInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationCreateOrConnectWithoutIdentityInput], {
    nullable: true,
  })
  connectOrCreate?: IdentityActRelationCreateOrConnectWithoutIdentityInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput], {
    nullable: true,
  })
  upsert?: IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationCreateManyIdentityInputEnvelope, {
    nullable: true,
  })
  createMany?: IdentityActRelationCreateManyIdentityInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  set?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  disconnect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  delete?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  connect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput], {
    nullable: true,
  })
  update?: IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationUpdateManyWithWhereWithoutIdentityInput], {
    nullable: true,
  })
  updateMany?: IdentityActRelationUpdateManyWithWhereWithoutIdentityInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereInput], { nullable: true })
  deleteMany?: IdentityActRelationScalarWhereInput[] | undefined;
}
