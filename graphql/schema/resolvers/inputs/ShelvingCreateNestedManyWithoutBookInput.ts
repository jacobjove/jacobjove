import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyBookInputEnvelope } from "../inputs/ShelvingCreateManyBookInputEnvelope";
import { ShelvingCreateOrConnectWithoutBookInput } from "../inputs/ShelvingCreateOrConnectWithoutBookInput";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateNestedManyWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(() => [ShelvingCreateWithoutBookInput], { nullable: true })
  create?: ShelvingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;
}
