import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AuthorshipMinAggregate", {
  isAbstract: true,
})
export class AuthorshipMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  authorId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  bookId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  position!: number | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;
}
