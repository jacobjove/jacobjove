import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ShelvingCreateNestedManyWithoutShelfInput } from "../inputs/ShelvingCreateNestedManyWithoutShelfInput";
import { UserCreateNestedOneWithoutBookshelvesInput } from "../inputs/UserCreateNestedOneWithoutBookshelvesInput";

@TypeGraphQL.InputType("BookshelfCreateInput", {
  isAbstract: true,
})
export class BookshelfCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutBookshelvesInput, { nullable: false })
  owner!: UserCreateNestedOneWithoutBookshelvesInput;

  @TypeGraphQL.Field(() => ShelvingCreateNestedManyWithoutShelfInput, { nullable: true })
  shelvings?: ShelvingCreateNestedManyWithoutShelfInput | undefined;
}
