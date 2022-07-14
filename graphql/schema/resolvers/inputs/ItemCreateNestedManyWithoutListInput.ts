import * as TypeGraphQL from "type-graphql";
import { ItemCreateManyListInputEnvelope } from "../inputs/ItemCreateManyListInputEnvelope";
import { ItemCreateOrConnectWithoutListInput } from "../inputs/ItemCreateOrConnectWithoutListInput";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedManyWithoutListInput", {
  isAbstract: true,
})
export class ItemCreateNestedManyWithoutListInput {
  @TypeGraphQL.Field((_type) => [ItemCreateWithoutListInput], {
    nullable: true,
  })
  create?: ItemCreateWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemCreateOrConnectWithoutListInput], {
    nullable: true,
  })
  connectOrCreate?: ItemCreateOrConnectWithoutListInput[] | undefined;

  @TypeGraphQL.Field((_type) => ItemCreateManyListInputEnvelope, {
    nullable: true,
  })
  createMany?: ItemCreateManyListInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ItemWhereUniqueInput], {
    nullable: true,
  })
  connect?: ItemWhereUniqueInput[] | undefined;
}
