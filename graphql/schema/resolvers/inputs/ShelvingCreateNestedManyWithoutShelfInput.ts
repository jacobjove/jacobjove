import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateManyShelfInputEnvelope } from "../inputs/ShelvingCreateManyShelfInputEnvelope";
import { ShelvingCreateOrConnectWithoutShelfInput } from "../inputs/ShelvingCreateOrConnectWithoutShelfInput";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateNestedManyWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingCreateNestedManyWithoutShelfInput {
  @TypeGraphQL.Field((_type) => [ShelvingCreateWithoutShelfInput], {
    nullable: true,
  })
  create?: ShelvingCreateWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingCreateOrConnectWithoutShelfInput], {
    nullable: true,
  })
  connectOrCreate?: ShelvingCreateOrConnectWithoutShelfInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingCreateManyShelfInputEnvelope, {
    nullable: true,
  })
  createMany?: ShelvingCreateManyShelfInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereUniqueInput], {
    nullable: true,
  })
  connect?: ShelvingWhereUniqueInput[] | undefined;
}
