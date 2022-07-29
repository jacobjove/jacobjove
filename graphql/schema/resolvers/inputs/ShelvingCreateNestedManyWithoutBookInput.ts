import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyBookInputEnvelope } from "../inputs/ShelvingCreateManyBookInputEnvelope";
import { ShelvingCreateOrConnectWithoutBookInput } from "../inputs/ShelvingCreateOrConnectWithoutBookInput";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateNestedManyWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [ShelvingCreateWithoutBookInput], { nullable: true })
  create?: ShelvingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;
}
