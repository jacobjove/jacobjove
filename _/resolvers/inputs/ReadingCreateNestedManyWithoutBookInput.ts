import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateManyBookInputEnvelope } from "../inputs/ReadingCreateManyBookInputEnvelope";
import { ReadingCreateOrConnectWithoutBookInput } from "../inputs/ReadingCreateOrConnectWithoutBookInput";
import { ReadingCreateWithoutBookInput } from "../inputs/ReadingCreateWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateNestedManyWithoutBookInput", { isAbstract: true })
export class ReadingCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(() => [ReadingCreateWithoutBookInput], { nullable: true })
  create?: ReadingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: ReadingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => ReadingCreateManyBookInputEnvelope, { nullable: true })
  createMany?: ReadingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereUniqueInput], { nullable: true })
  connect?: ReadingWhereUniqueInput[] | undefined;
}
