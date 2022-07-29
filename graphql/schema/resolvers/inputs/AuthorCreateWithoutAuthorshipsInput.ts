import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("AuthorCreateWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorCreateWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
