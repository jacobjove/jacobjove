import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReadingsInput } from "../inputs/BookCreateNestedOneWithoutReadingsInput";
import { UserCreateNestedOneWithoutReadingsInput } from "../inputs/UserCreateNestedOneWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingCreateWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingCreateWithoutReviewInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateStarted?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateFinished?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutReadingsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutReadingsInput;

  @TypeGraphQL.Field((_type) => BookCreateNestedOneWithoutReadingsInput, {
    nullable: false,
  })
  book!: BookCreateNestedOneWithoutReadingsInput;
}
