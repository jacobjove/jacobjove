import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateManyOwnerInputEnvelope } from "../inputs/ListCreateManyOwnerInputEnvelope";
import { ListCreateOrConnectWithoutOwnerInput } from "../inputs/ListCreateOrConnectWithoutOwnerInput";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateNestedManyWithoutOwnerInput", { isAbstract: true })
export class ListCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(() => [ListCreateWithoutOwnerInput], { nullable: true })
  create?: ListCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [ListCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => ListCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: ListCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ListWhereUniqueInput], { nullable: true })
  connect?: ListWhereUniqueInput[] | undefined;
}
