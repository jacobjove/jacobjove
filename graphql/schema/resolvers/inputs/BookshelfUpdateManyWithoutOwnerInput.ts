import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateManyOwnerInputEnvelope } from "../inputs/BookshelfCreateManyOwnerInputEnvelope";
import { BookshelfCreateOrConnectWithoutOwnerInput } from "../inputs/BookshelfCreateOrConnectWithoutOwnerInput";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfScalarWhereInput } from "../inputs/BookshelfScalarWhereInput";
import { BookshelfUpdateManyWithWhereWithoutOwnerInput } from "../inputs/BookshelfUpdateManyWithWhereWithoutOwnerInput";
import { BookshelfUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/BookshelfUpdateWithWhereUniqueWithoutOwnerInput";
import { BookshelfUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/BookshelfUpsertWithWhereUniqueWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpdateManyWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(() => [BookshelfCreateWithoutOwnerInput], { nullable: true })
  create?: BookshelfCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: BookshelfCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  upsert?: BookshelfUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => BookshelfCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: BookshelfCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereUniqueInput], { nullable: true })
  set?: BookshelfWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereUniqueInput], { nullable: true })
  disconnect?: BookshelfWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereUniqueInput], { nullable: true })
  delete?: BookshelfWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereUniqueInput], { nullable: true })
  connect?: BookshelfWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  update?: BookshelfUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  updateMany?: BookshelfUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfScalarWhereInput], { nullable: true })
  deleteMany?: BookshelfScalarWhereInput[] | undefined;
}
