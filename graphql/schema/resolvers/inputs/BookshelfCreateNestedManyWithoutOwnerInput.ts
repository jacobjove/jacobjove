import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateManyOwnerInputEnvelope } from "../inputs/BookshelfCreateManyOwnerInputEnvelope";
import { BookshelfCreateOrConnectWithoutOwnerInput } from "../inputs/BookshelfCreateOrConnectWithoutOwnerInput";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateNestedManyWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => [BookshelfCreateWithoutOwnerInput], { nullable: true })
  create?: BookshelfCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: BookshelfCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookshelfCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: BookshelfCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfWhereUniqueInput], { nullable: true })
  connect?: BookshelfWhereUniqueInput[] | undefined;
}
