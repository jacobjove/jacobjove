import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyShelfInputEnvelope } from "../inputs/ShelvingCreateManyShelfInputEnvelope";
import { ShelvingCreateOrConnectWithoutShelfInput } from "../inputs/ShelvingCreateOrConnectWithoutShelfInput";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateNestedManyWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingCreateNestedManyWithoutShelfInput {
  @TypeGraphQL.Field(() => [ShelvingCreateWithoutShelfInput], { nullable: true })
  create?: ShelvingCreateWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingCreateOrConnectWithoutShelfInput], { nullable: true })
  connectOrCreate?: ShelvingCreateOrConnectWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateManyShelfInputEnvelope, { nullable: true })
  createMany?: ShelvingCreateManyShelfInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereUniqueInput], { nullable: true })
  connect?: ShelvingWhereUniqueInput[] | undefined;
}
