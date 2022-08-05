import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyActInputEnvelope } from "../inputs/CategorizationCreateManyActInputEnvelope";
import { CategorizationCreateOrConnectWithoutActInput } from "../inputs/CategorizationCreateOrConnectWithoutActInput";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyWithWhereWithoutActInput } from "../inputs/CategorizationUpdateManyWithWhereWithoutActInput";
import { CategorizationUpdateWithWhereUniqueWithoutActInput } from "../inputs/CategorizationUpdateWithWhereUniqueWithoutActInput";
import { CategorizationUpsertWithWhereUniqueWithoutActInput } from "../inputs/CategorizationUpsertWithWhereUniqueWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithoutActInput", { isAbstract: true })
export class CategorizationUpdateManyWithoutActInput {
  @TypeGraphQL.Field(() => [CategorizationCreateWithoutActInput], { nullable: true })
  create?: CategorizationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: CategorizationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: CategorizationUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateManyActInputEnvelope, { nullable: true })
  createMany?: CategorizationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  set?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  disconnect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  delete?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  connect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: CategorizationUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: CategorizationUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereInput], { nullable: true })
  deleteMany?: CategorizationScalarWhereInput[] | undefined;
}
