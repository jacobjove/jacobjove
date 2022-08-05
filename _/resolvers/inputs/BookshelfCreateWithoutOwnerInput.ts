import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ShelvingCreateNestedManyWithoutShelfInput } from "../inputs/ShelvingCreateNestedManyWithoutShelfInput";

@TypeGraphQL.InputType("BookshelfCreateWithoutOwnerInput", { isAbstract: true })
export class BookshelfCreateWithoutOwnerInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateNestedManyWithoutShelfInput, { nullable: true })
  shelvings?: ShelvingCreateNestedManyWithoutShelfInput | undefined;
}
