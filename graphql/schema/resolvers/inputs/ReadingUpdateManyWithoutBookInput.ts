import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyBookInputEnvelope } from "../inputs/ReadingCreateManyBookInputEnvelope";
import { ReadingCreateOrConnectWithoutBookInput } from "../inputs/ReadingCreateOrConnectWithoutBookInput";
import { ReadingCreateWithoutBookInput } from "../inputs/ReadingCreateWithoutBookInput";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyWithWhereWithoutBookInput } from "../inputs/ReadingUpdateManyWithWhereWithoutBookInput";
import { ReadingUpdateWithWhereUniqueWithoutBookInput } from "../inputs/ReadingUpdateWithWhereUniqueWithoutBookInput";
import { ReadingUpsertWithWhereUniqueWithoutBookInput } from "../inputs/ReadingUpsertWithWhereUniqueWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpdateManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [ReadingCreateWithoutBookInput], { nullable: true })
  create?: ReadingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpsertWithWhereUniqueWithoutBookInput], { nullable: true })
  upsert?: ReadingUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  set?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  disconnect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  delete?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpdateWithWhereUniqueWithoutBookInput], { nullable: true })
  update?: ReadingUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: ReadingUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarWhereInput], { nullable: true })
  deleteMany?: ReadingScalarWhereInput[] | undefined;
}
