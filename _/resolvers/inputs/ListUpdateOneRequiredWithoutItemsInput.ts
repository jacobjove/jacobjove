import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateOrConnectWithoutItemsInput } from "../inputs/ListCreateOrConnectWithoutItemsInput";
import { ListCreateWithoutItemsInput } from "../inputs/ListCreateWithoutItemsInput";
import { ListUpdateWithoutItemsInput } from "../inputs/ListUpdateWithoutItemsInput";
import { ListUpsertWithoutItemsInput } from "../inputs/ListUpsertWithoutItemsInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpdateOneRequiredWithoutItemsInput", { isAbstract: true })
export class ListUpdateOneRequiredWithoutItemsInput {
  @TypeGraphQL.Field(() => ListCreateWithoutItemsInput, { nullable: true })
  create?: ListCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(() => ListCreateOrConnectWithoutItemsInput, { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(() => ListUpsertWithoutItemsInput, { nullable: true })
  upsert?: ListUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: true })
  connect?: ListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ListUpdateWithoutItemsInput, { nullable: true })
  update?: ListUpdateWithoutItemsInput | undefined;
}
