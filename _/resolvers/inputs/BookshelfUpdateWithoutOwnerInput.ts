import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingUpdateManyWithoutShelfInput } from "../inputs/ShelvingUpdateManyWithoutShelfInput";

@TypeGraphQL.InputType("BookshelfUpdateWithoutOwnerInput", { isAbstract: true })
export class BookshelfUpdateWithoutOwnerInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ShelvingUpdateManyWithoutShelfInput, { nullable: true })
  shelvings?: ShelvingUpdateManyWithoutShelfInput | undefined;
}
