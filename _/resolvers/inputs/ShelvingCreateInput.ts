import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutShelvingsInput } from "../inputs/BookCreateNestedOneWithoutShelvingsInput";
import { BookshelfCreateNestedOneWithoutShelvingsInput } from "../inputs/BookshelfCreateNestedOneWithoutShelvingsInput";

@TypeGraphQL.InputType("ShelvingCreateInput", { isAbstract: true })
export class ShelvingCreateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  rationale?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutShelvingsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutShelvingsInput;

  @TypeGraphQL.Field(() => BookshelfCreateNestedOneWithoutShelvingsInput, { nullable: false })
  shelf!: BookshelfCreateNestedOneWithoutShelvingsInput;
}
