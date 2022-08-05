import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateManyListInputEnvelope } from "../inputs/ItemCreateManyListInputEnvelope";
import { ItemCreateOrConnectWithoutListInput } from "../inputs/ItemCreateOrConnectWithoutListInput";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedManyWithoutListInput", { isAbstract: true })
export class ItemCreateNestedManyWithoutListInput {
  @TypeGraphQL.Field(() => [ItemCreateWithoutListInput], { nullable: true })
  create?: ItemCreateWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemCreateOrConnectWithoutListInput], { nullable: true })
  connectOrCreate?: ItemCreateOrConnectWithoutListInput[] | undefined;

  @TypeGraphQL.Field(() => ItemCreateManyListInputEnvelope, { nullable: true })
  createMany?: ItemCreateManyListInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ItemWhereUniqueInput], { nullable: true })
  connect?: ItemWhereUniqueInput[] | undefined;
}
