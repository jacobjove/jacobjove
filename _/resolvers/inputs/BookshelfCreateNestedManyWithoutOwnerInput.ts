import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateManyOwnerInputEnvelope } from "../inputs/BookshelfCreateManyOwnerInputEnvelope";
import { BookshelfCreateOrConnectWithoutOwnerInput } from "../inputs/BookshelfCreateOrConnectWithoutOwnerInput";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateNestedManyWithoutOwnerInput", { isAbstract: true })
export class BookshelfCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(() => [BookshelfCreateWithoutOwnerInput], { nullable: true })
  create?: BookshelfCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: BookshelfCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => BookshelfCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: BookshelfCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereUniqueInput], { nullable: true })
  connect?: BookshelfWhereUniqueInput[] | undefined;
}
