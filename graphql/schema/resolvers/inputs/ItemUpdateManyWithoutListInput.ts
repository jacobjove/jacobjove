import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateManyListInputEnvelope } from "../inputs/ItemCreateManyListInputEnvelope";
import { ItemCreateOrConnectWithoutListInput } from "../inputs/ItemCreateOrConnectWithoutListInput";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyWithWhereWithoutListInput } from "../inputs/ItemUpdateManyWithWhereWithoutListInput";
import { ItemUpdateWithWhereUniqueWithoutListInput } from "../inputs/ItemUpdateWithWhereUniqueWithoutListInput";
import { ItemUpsertWithWhereUniqueWithoutListInput } from "../inputs/ItemUpsertWithWhereUniqueWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateManyWithoutListInput", {
  isAbstract: true,
})
export class ItemUpdateManyWithoutListInput {
  @TypeGraphQL.Field(() => [ItemCreateWithoutListInput], { nullable: true })
  create?: ItemCreateWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemCreateOrConnectWithoutListInput], { nullable: true })
  connectOrCreate?: ItemCreateOrConnectWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemUpsertWithWhereUniqueWithoutListInput], { nullable: true })
  upsert?: ItemUpsertWithWhereUniqueWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => ItemCreateManyListInputEnvelope, { nullable: true })
  createMany?: ItemCreateManyListInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ItemWhereUniqueInput], { nullable: true })
  set?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemWhereUniqueInput], { nullable: true })
  disconnect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemWhereUniqueInput], { nullable: true })
  delete?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemWhereUniqueInput], { nullable: true })
  connect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemUpdateWithWhereUniqueWithoutListInput], { nullable: true })
  update?: ItemUpdateWithWhereUniqueWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemUpdateManyWithWhereWithoutListInput], { nullable: true })
  updateMany?: ItemUpdateManyWithWhereWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemScalarWhereInput], { nullable: true })
  deleteMany?: ItemScalarWhereInput[] | undefined;
}
