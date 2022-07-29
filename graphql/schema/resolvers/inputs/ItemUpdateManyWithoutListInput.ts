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
  @TypeGraphQL.Field((_type) => [ItemCreateWithoutListInput], { nullable: true })
  create?: ItemCreateWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemCreateOrConnectWithoutListInput], { nullable: true })
  connectOrCreate?: ItemCreateOrConnectWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemUpsertWithWhereUniqueWithoutListInput], { nullable: true })
  upsert?: ItemUpsertWithWhereUniqueWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => ItemCreateManyListInputEnvelope, { nullable: true })
  createMany?: ItemCreateManyListInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ItemWhereUniqueInput], { nullable: true })
  set?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemWhereUniqueInput], { nullable: true })
  disconnect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemWhereUniqueInput], { nullable: true })
  delete?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemWhereUniqueInput], { nullable: true })
  connect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemUpdateWithWhereUniqueWithoutListInput], { nullable: true })
  update?: ItemUpdateWithWhereUniqueWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemUpdateManyWithWhereWithoutListInput], { nullable: true })
  updateMany?: ItemUpdateManyWithWhereWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarWhereInput], { nullable: true })
  deleteMany?: ItemScalarWhereInput[] | undefined;
}
