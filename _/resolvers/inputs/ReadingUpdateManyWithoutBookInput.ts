import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyBookInputEnvelope } from "../inputs/ReadingCreateManyBookInputEnvelope";
import { ReadingCreateOrConnectWithoutBookInput } from "../inputs/ReadingCreateOrConnectWithoutBookInput";
import { ReadingCreateWithoutBookInput } from "../inputs/ReadingCreateWithoutBookInput";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyWithWhereWithoutBookInput } from "../inputs/ReadingUpdateManyWithWhereWithoutBookInput";
import { ReadingUpdateWithWhereUniqueWithoutBookInput } from "../inputs/ReadingUpdateWithWhereUniqueWithoutBookInput";
import { ReadingUpsertWithWhereUniqueWithoutBookInput } from "../inputs/ReadingUpsertWithWhereUniqueWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithoutBookInput", { isAbstract: true })
export class ReadingUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(() => [ReadingCreateWithoutBookInput], { nullable: true })
  create?: ReadingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpsertWithWhereUniqueWithoutBookInput], { nullable: true })
  upsert?: ReadingUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => ReadingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  set?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  disconnect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  delete?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpdateWithWhereUniqueWithoutBookInput], { nullable: true })
  update?: ReadingUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: ReadingUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingScalarWhereInput], { nullable: true })
  deleteMany?: ReadingScalarWhereInput[] | undefined;
}
