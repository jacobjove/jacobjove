import * as TypeGraphQL from "type-graphql";
import { ListCreateManyOwnerInputEnvelope } from "../inputs/ListCreateManyOwnerInputEnvelope";
import { ListCreateOrConnectWithoutOwnerInput } from "../inputs/ListCreateOrConnectWithoutOwnerInput";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateNestedManyWithoutOwnerInput", {
  isAbstract: true,
})
export class ListCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => [ListCreateWithoutOwnerInput], {
    nullable: true,
  })
  create?: ListCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListCreateOrConnectWithoutOwnerInput], {
    nullable: true,
  })
  connectOrCreate?: ListCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => ListCreateManyOwnerInputEnvelope, {
    nullable: true,
  })
  createMany?: ListCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ListWhereUniqueInput], {
    nullable: true,
  })
  connect?: ListWhereUniqueInput[] | undefined;
}
